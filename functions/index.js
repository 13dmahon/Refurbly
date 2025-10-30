const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51SNwtGQuoxdBSwDrP4xopttYdUZzeWrLMfYaX0TFQUymL74WTJIcNRZApDYUS3LYjNe00zMLDN1JDZR4Hl7u3Ct900m2AWH0qL');

admin.initializeApp();

setGlobalOptions({ region: 'us-central1' });

exports.createCheckoutSession = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const { quoteData } = request.data;

  try {
    console.log('Creating checkout session for user:', userId);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `https://ascension-app-e3d00.web.app/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://ascension-app-e3d00.web.app/`,
      customer_email: request.auth.token.email,
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Refurbly Premium - Lifetime Access',
              description: 'Unlimited detailed breakdowns, contractor contacts, and PDF exports',
            },
            unit_amount: 999,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        quoteData: JSON.stringify(quoteData),
      },
    });

    console.log('Session created:', session.id);
    return { 
      sessionId: session.id,
      url: session.url  // Return the checkout URL
    };
    
  } catch (error) {
    console.error('Stripe error:', error);
    throw new HttpsError('internal', error.message);
  }
});

const { onRequest } = require('firebase-functions/v2/https');

exports.stripeWebhook = onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = 'whsec_YOUR_WEBHOOK_SECRET';

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id;

    await admin.firestore().collection('users').doc(userId).set({
      isPremium: true,
      upgradedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log(`User ${userId} upgraded to premium`);
  }

  res.json({ received: true });
});
