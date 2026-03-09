import Stripe from "stripe";
import { get_event_price_for_user } from "./registration.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPaymentIntent = async (
  amountCents: number,
  receiptEmail: string
): Promise<{ clientSecret: string; paymentIntentId: string }> => {
  const intent = await stripe.paymentIntents.create({
    amount: amountCents,
    currency: "cad",
    automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    receipt_email: receiptEmail,
  });

  return {
    clientSecret: intent.client_secret!,
    paymentIntentId: intent.id,
  };
};

/**
 * Create a Stripe PaymentIntent for an event, priced based on the user's membership status.
 * Throws named errors from get_event_price_for_user (EVENT_NOT_FOUND, MEMBER_ONLY).
 * Throws "FREE_EVENT" if the event has no applicable charge.
 */
export const createEventPaymentIntent = async (
  userId: string,
  eventId: number,
  receiptEmail: string
): Promise<{
  clientSecret: string;
  paymentIntentId: string;
  amountCents: number;
}> => {
  const { amountCents } = await get_event_price_for_user(userId, eventId);

  if (amountCents === 0) throw new Error("FREE_EVENT");

  const intent = await stripe.paymentIntents.create({
    amount: amountCents,
    currency: "cad",
    automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    receipt_email: receiptEmail,
    // Store event/user context so the webhook can create the registration as a fallback
    metadata: { eventId: String(eventId), userId },
  });

  return {
    clientSecret: intent.client_secret!,
    paymentIntentId: intent.id,
    amountCents,
  };
};

/**
 * Construct and verify a Stripe webhook event from the raw request body.
 * Throws if the signature is invalid.
 */
export const constructWebhookEvent = (
  rawBody: Buffer,
  signature: string
): Stripe.Event => {
  return stripe.webhooks.constructEvent(
    rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
};

/**
 * Stamps a membership PaymentIntent with registration data for webhook recovery.
 */
export const stampMembershipMetadata = async (
  paymentIntentId: string,
  metadata: Record<string, string>
): Promise<void> => {
  await stripe.paymentIntents.update(paymentIntentId, { metadata });
};

/**
 * Verifies a PaymentIntent succeeded AND that the charged amount matches
 * the expected amount (in cents). Returns false if either check fails.
 */
export const verifyPayment = async (
  paymentIntentId: string,
  expectedAmountCents: number
): Promise<boolean> => {
  const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
  return intent.status === "succeeded" && intent.amount === expectedAmountCents;
};
