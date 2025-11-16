import { httpsCallable } from 'firebase/functions';
import { functions } from './firebaseClient';

export async function startCheckout(quoteData, user) {
  const createCheckoutSession = httpsCallable(
    functions,
    'createCheckoutSession'
  );

  const res = await createCheckoutSession({
    quoteData,
    user: user
      ? { uid: user.uid, email: user.email || null }
      : null,
  });

  const { data } = res;
  if (!data || !data.url) {
    throw new Error('Stripe session did not return a URL');
  }

  // Redirect user to Stripe Checkout
  window.location.assign(data.url);
}
