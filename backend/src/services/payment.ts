import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const createPaymentIntent = async (
	amountCents: number,
): Promise<{ clientSecret: string; paymentIntentId: string }> => {
	const intent = await stripe.paymentIntents.create({
		amount: amountCents,
		currency: "cad",
		automatic_payment_methods: { enabled: true, allow_redirects: "never" },
	});

	return {
		clientSecret: intent.client_secret!,
		paymentIntentId: intent.id,
	};
};

/**
 * Verifies a PaymentIntent succeeded AND that the charged amount matches
 * the expected amount (in cents). Returns false if either check fails.
 */
export const verifyPayment = async (
	paymentIntentId: string,
	expectedAmountCents: number,
): Promise<boolean> => {
	const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
	return intent.status === "succeeded" && intent.amount === expectedAmountCents;
};
