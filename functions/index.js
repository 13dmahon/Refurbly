// Firebase Functions v2 + Stripe backend for Refurbly

const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const stripeLib = require('stripe');

// --- Firebase Admin init ---
admin.initializeApp();
setGlobalOptions({ region: 'us-central1' });

// --- Stripe setup ---
// Test secret key (you shared this; fine for sandbox)
const STRIPE_SECRET_KEY = 'sk_test_51SNwtGQuoxdBSwDrP4xopttYdUZzeWrLMfYaX0TFQUymL74WTJIcNRZApDYUS3LYjNe00zMLDN1JDZR4Hl7u3Ct900m2AWH0qL';

// Webhook signing secret (from your Stripe Dashboard)
const STRIPE_WEBHOOK_SECRET = 'whsec_bwCLoucDg8vgVEpgWDdFbY83fxX7nUWM';

const stripe = stripeLib(STRIPE_SECRET_KEY);
const db = admin.firestore();

// --- Callable function: createCheckoutSession ---
// Called from frontend via httpsCallable(functions, 'createCheckoutSession')
exports.createCheckoutSession = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'You must be logged in to purchase premium.');
  }

  const userId = request.auth.uid;
  const { quoteData } = request.data || {};
  const customerEmail = request.auth.token.email;

  try {
    console.log('Creating checkout session for user:', userId);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `https://ascension-app-e3d00.web.app/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://ascension-app-e3d00.web.app/`,
      client_reference_id: userId,
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Refurbly Premium - Lifetime Access',
              description: 'Unlimited saved quotes, full breakdowns, and editing',
            },
            unit_amount: 999, // £9.99
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        quoteId: quoteData?.id || 'unknown',
      },
    });

    console.log('Stripe Checkout Session created:', session.id);

    return {
      sessionId: session.id,
      url: session.url,
    };
  } catch (error) {
    console.error('Stripe error creating checkout session:', error);
    throw new HttpsError('internal', error.message || 'Failed to create checkout session');
  }
});

// --- HTTP function: Stripe webhook ---
// Endpoint used in Stripe Dashboard: https://us-central1-ascension-app-e3d00.cloudfunctions.net/stripeWebhook
exports.stripeWebhook = onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, STRIPE_WEBHOOK_SECRET);
    console.log('Received Stripe event:', event.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id;

    if (!userId) {
      console.warn('checkout.session.completed with no client_reference_id');
    } else {
      console.log('Marking user as premium:', userId);
      await db.collection('users').doc(userId).set(
        {
          isPremium: true,
          upgradedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      console.log(`User ${userId} upgraded to premium`);
    }
  } else {
    console.log(`Unhandled event type: ${event.type}`);
  }

  return res.json({ received: true });
});

// --- Simple ping for diagnostics ---
exports.ping = onRequest((req, res) => {
  res.status(200).send('Refurbly backend is alive ✅');
});
