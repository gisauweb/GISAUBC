import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

export default function CheckoutForm({ onSuccess, total }) {
	const stripe = useStripe();
	const elements = useElements();
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [succeeded, setSucceeded] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			confirmParams: {},
			redirect: 'if_required',
		});

		if (error) {
			if (error.type === 'card_error' || error.type === 'validation_error') {
				setMessage(error.message);
			} else {
				setMessage('An unexpected error occurred.');
			}
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			setSucceeded(true);
			onSuccess(paymentIntent.id);
		}

		setIsLoading(false);
	};

	if (succeeded) {
		return (
			<div className='flex flex-col items-center gap-3 py-6 text-center'>
				<div className='w-14 h-14 rounded-full bg-green-100 flex items-center justify-center'>
					<svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
					</svg>
				</div>
				<div>
					<p className='font-semibold text-gray-800'>Payment successful!</p>
					<p className='text-sm text-gray-500 mt-1'>
						A receipt has been sent to your email. Click Submit below to complete your registration.
					</p>
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<LinkAuthenticationElement />
			<PaymentElement options={{ layout: 'accordion' }} />

			{message && (
				<div className='flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3'>
					<svg className='w-4 h-4 shrink-0' fill='currentColor' viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
							clipRule='evenodd'
						/>
					</svg>
					{message}
				</div>
			)}

			<button
				type='submit'
				disabled={isLoading || !stripe || !elements}
				className='w-full py-3 px-6 rounded-lg font-semibold text-white text-sm transition-all
					bg-primary hover:bg-[#5a1e1e] active:scale-[0.98]
					disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
					flex items-center justify-center gap-2'
			>
				{isLoading ? (
					<>
						<svg className='animate-spin w-4 h-4' fill='none' viewBox='0 0 24 24'>
							<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
							<path
								className='opacity-75'
								fill='currentColor'
								d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
							/>
						</svg>
						Processing...
					</>
				) : (
					<>
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
							/>
						</svg>
						Pay ${total}
					</>
				)}
			</button>

			<p className='text-center text-xs text-gray-400 flex items-center justify-center gap-1'>
				<svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
						clipRule='evenodd'
					/>
				</svg>
				Secured by Stripe
			</p>
		</form>
	);
}
