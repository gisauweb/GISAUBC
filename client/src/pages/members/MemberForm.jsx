import { Box } from '@mui/material';
import supabase from 'libs/supabaseClient';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ApplePay, CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

// --- Constants ---
const FACULTIES = [
	'Arts',
	'Science',
	'Engineering',
	'Sauder',
	'Land & Food Systems',
	'Kinesiology',
	'Forestry',
	'Other',
];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th+ Year', 'Graduate'];

const MEMBERSHIP_TYPES = [
	{ id: 'full', label: 'Full term membership (September 2025 - April 2026)', price: 9 },
	{ id: 'sem1', label: 'Half term membership (September 2025 - December 2025)', price: 5 },
	{ id: 'sem2', label: 'Half term membership (January 2026 - April 2026)', price: 5 },
];

const MERCHANDISE = [
	{ id: 'keychain', label: 'Keychain', price: 2 },
	{ id: 'bucketHat', label: 'Bucket Hat', price: 6 },
	{ id: 'bottle', label: 'Bottle', price: 9 },
	{ id: 'sticker', label: 'Sticker Sheet', price: 2 },
	{ id: 'umbrella', label: 'Umbrella', price: 5 },
];

export default function MemberForm() {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState(null);

	const {
		register,
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			studentId: '',
			faculty: '',
			yearOfStudy: '',
			recommendation: '',
			membershipType: 'full',
			merch: [],
			paymentMethod: 'online',
		},
	});

	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			if (session?.user?.email) {
				setValue('email', session.user.email);
			}
		};
		fetchUser();
	}, [setValue]);

	const formValues = watch();

	const calculateTotal = () => {
		let total = 0;
		const membership = MEMBERSHIP_TYPES.find((m) => m.id === formValues.membershipType);
		if (membership) total += membership.price;

		if (formValues.merch && Array.isArray(formValues.merch)) {
			formValues.merch.forEach((itemId) => {
				const item = MERCHANDISE.find((m) => m.id === itemId);
				if (item) total += item.price;
			});
		}
		return total;
	};

	const onSubmit = async (data) => {
		if (step < 3) {
			setStep(step + 1);
		} else {
			setLoading(true);
			setApiError(null);

			try {
				const { data: authData } = await supabase.auth.getSession();
				const token = authData.session?.access_token;
				if (!token) throw new Error('Not authenticated. Please log in first.');

				const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						...data,
						// totalPrice: calculateTotal(), // Sending the calculated total
					}),
				});

				if (!res.ok) {
					const body = await res.json().catch(() => ({}));
					throw new Error(body.error || 'Registration failed');
				}

				setIsSubmitted(true);
			} catch (err) {
				setApiError(err.message);
			} finally {
				setLoading(false);
			}
		}
	};

	// --- Render Steps ---

	const renderStepIndicator = () => (
		<div className='flex justify-center items-center mb-12'>
			{[1, 2, 3].map((num) => (
				<React.Fragment key={num}>
					<div
						className='flex flex-col items-center relative z-10 cursor-pointer'
						onClick={async () => {
							if (num < step) {
								// Always allow going back
								setStep(num);
							}
						}}
					>
						<div
							className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg font-bold border-2 transition-colors duration-300
                ${
					step === num
						? 'bg-primary text-white border-primary'
						: step > num
						? 'bg-primary text-white border-primary'
						: 'bg-gray-200 text-gray-500 border-gray-300'
				}`}
						>
							{num}
						</div>
						<span className='text-[10px] md:text-xs mt-2 absolute top-10 md:top-12 text-gray-600 font-medium w-20 text-center leading-tight'>
							{num === 1 && 'Personal Information'}
							{num === 2 && 'Membership Pricing'}
							{num === 3 && 'Payment'}
						</span>
					</div>
					{num < 3 && (
						<div
							className={`w-12 md:w-24 h-1 transition-colors duration-300 mx-1 md:mx-2 ${
								step > num ? 'bg-primary' : 'bg-gray-300'
							}`}
						/>
					)}
				</React.Fragment>
			))}
		</div>
	);

	const renderStep1 = () => (
		<div className='space-y-6 max-w-4xl mx-auto'>
			<h2 className='text-xl font-bold font-oswald mb-4'>Personal Information</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>First Name *</label>
					<input
						{...register('firstName', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none'
						placeholder=''
					/>
					{errors.firstName && <span className='text-red-500 text-xs'>Required</span>}
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Last Name *</label>
					<input
						{...register('lastName', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none'
						placeholder=''
					/>
					{errors.lastName && <span className='text-red-500 text-xs'>Required</span>}
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
					<input
						{...register('email', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none'
						placeholder='Loading email...'
						disabled
					/>
					{errors.email && <span className='text-red-500 text-xs'>Required</span>}
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Student Number *</label>
					<input
						{...register('studentId', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none'
						placeholder=''
					/>
					{errors.studentId && <span className='text-red-500 text-xs'>Required</span>}
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Faculty *</label>
					<select
						{...register('faculty', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none appearance-none'
					>
						<option value='' disabled>
							Choose One
						</option>
						{FACULTIES.map((f) => (
							<option key={f} value={f}>
								{f}
							</option>
						))}
					</select>
					{errors.faculty && <span className='text-red-500 text-xs'>Required</span>}
				</div>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1'>Year of Study *</label>
					<select
						{...register('yearOfStudy', { required: true })}
						className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none appearance-none'
					>
						<option value='' disabled>
							Choose One
						</option>
						{YEARS.map((y) => (
							<option key={y} value={y}>
								{y}
							</option>
						))}
					</select>
					{errors.year && <span className='text-red-500 text-xs'>Required</span>}
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					What foods or events are you looking forward for GISAU to host? We will try make it happen!
				</label>
				<textarea
					{...register('recommendation')}
					className='w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none h-24 resize-none'
					placeholder=''
				/>
			</div>

			<div>
				<label className='block text-sm font-medium text-gray-700 mb-2'>Membership Type</label>
				<div className='space-y-2'>
					{MEMBERSHIP_TYPES.map((type) => (
						<label key={type.id} className='flex items-center space-x-3 cursor-pointer'>
							<input
								type='radio'
								value={type.id}
								{...register('membershipType', { required: true })}
								className='accent-primary w-5 h-5'
							/>
							<span className='text-sm text-gray-700'>
								{type.label} = ${type.price}
							</span>
						</label>
					))}
				</div>
			</div>

			<div className='flex justify-center mt-8'>
				<button
					onClick={handleSubmit(onSubmit)}
					className='bg-primary text-white px-8 py-2 rounded-full font-bold hover:bg-[#5a1e1e] transition-colors'
				>
					Continue
				</button>
			</div>
		</div>
	);

	const renderStep2 = () => {
		const selectedMembership = MEMBERSHIP_TYPES.find((m) => m.id === formValues.membershipType);
		const currentMerch = formValues.merch || [];

		return (
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-8'>
				{/* Left Side: Merch Selection */}
				<div className='flex-1'>
					<div className='bg-primary text-white p-3 rounded-md mb-6 inline-block'>
						<h2 className='text-base md:text-xl font-bold font-oswald pl-2 pr-4'>
							{selectedMembership?.label.split('(')[0].trim() || 'Membership'} — $
							{selectedMembership?.price || 0}
						</h2>
					</div>

					<h3 className='text-gray-700 mb-4'>Select your merchandise (optional)!</h3>
					<div className='space-y-3'>
						{MERCHANDISE.map((item) => (
							<label key={item.id} className='flex items-center space-x-3 cursor-pointer'>
								<input
									type='checkbox'
									value={item.id}
									{...register('merch')}
									className='accent-primary w-5 h-5 rounded'
								/>
								<span className='text-gray-700'>
									{item.label} (+${item.price})
								</span>
							</label>
						))}
						<label className='flex items-center space-x-3 cursor-pointer'>
							<input type='checkbox' className='accent-primary w-5 h-5 rounded' />
							<span className='text-gray-700'>No Merchandise</span>
						</label>
					</div>
				</div>

				{/* Right Side: Order Summary */}
				<div className='w-full md:w-96 bg-gray-100 p-6 rounded-sm h-fit'>
					<h3 className='text-lg font-bold font-oswald uppercase mb-4 tracking-wider border-b border-black pb-2'>
						ORDER SUMMARY
					</h3>

					<div className='space-y-2 mb-8 text-sm font-mono'>
						<div className='flex justify-between'>
							<span>{selectedMembership?.label.split('(')[0].trim()}</span>
							<span>${selectedMembership?.price}</span>
						</div>
						{currentMerch.map((itemId) => {
							const item = MERCHANDISE.find((m) => m.id === itemId);
							return item ? (
								<div key={item.id} className='flex justify-between'>
									<span>{item.label}</span>
									<span>+${item.price}</span>
								</div>
							) : null;
						})}
					</div>

					<div className='flex justify-between font-bold border-t border-black pt-4'>
						<span>Total:</span>
						<span>${calculateTotal()}</span>
					</div>
				</div>

				<div className='flex justify-center w-full md:absolute md:bottom-10 md:left-0 md:right-0 mt-8 md:mt-0 pointer-events-none'>
					<div className='pointer-events-auto'>
						<button
							onClick={handleSubmit(onSubmit)}
							className='bg-primary text-white px-10 py-2 rounded-full font-bold hover:bg-[#5a1e1e] transition-colors'
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		);
	};

	const renderStep3 = () => (
		<div className='max-w-4xl mx-auto'>
			<div className='bg-primary text-white p-3 rounded-md mb-6 inline-block'>
				<h2 className='text-xl font-bold font-oswald pl-2 pr-4'>Select Method of Payment</h2>
			</div>

			<div className='space-y-2 mb-8 ml-2'>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='radio'
						value='card'
						{...register('paymentMethod', { required: true })}
						defaultChecked
						className='accent-primary w-5 h-5'
					/>
					<span className='text-gray-700 font-medium'>Card</span>
				</label>
				<label className='flex items-center space-x-3 cursor-pointer'>
					<input
						type='radio'
						value='cash'
						{...register('paymentMethod', { required: true })}
						className='accent-primary w-5 h-5'
					/>
					<span className='text-gray-700 font-medium'>Cash</span>
				</label>
			</div>

			{watch('paymentMethod') === 'card' ? (
				<div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8'>
					<h3 className='text-primary font-bold text-lg mb-4'>Credit Card Details</h3>
					{/* <div className='mb-4'>
						<ApplePay />
					</div> */}

					<CreditCard
						buttonProps={{
							className: 'bg-primary! rounded-full! font-bold! ',
							text: `Pay $${() => calculateTotal()}`,
						}}
					/>
					{apiError && <p className='text-red-500 text-sm mt-4 text-center'>{apiError}</p>}
				</div>
			) : (
				<div className='bg-[#F0F4FA] p-8 rounded-lg mb-8'>
					<h3 className='text-[#A04040] font-bold text-lg mb-4'>Payment Details:</h3>
					<p className='font-bold mb-2'>Please meet us at:</p>
					<p className='text-sm mb-1'>📍 GISAU Clubs Room: 4302A</p>
					<p className='text-sm mb-6'>🕒 Monday-Friday, 10 AM - 4 PM</p>
					<p className='font-bold'>We look forward to seeing you!</p>

					<div className='flex justify-center mt-8'>
						<button
							onClick={handleSubmit(onSubmit)}
							className='bg-primary text-white px-10 py-2 rounded-full font-bold hover:bg-[#5a1e1e] transition-colors'
						>
							{loading ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</div>
			)}
		</div>
	);

	const renderSuccess = () => (
		<div className='flex flex-col items-center justify-center min-h-[50vh]'>
			<div className='bg-white p-12 rounded-xl shadow-lg text-center max-w-lg border border-gray-100'>
				{/* Placeholder for custom confetti/mascot image if available */}
				<div className='text-6xl mb-4'>🍁</div>
				<h2 className='text-4xl font-bold font-oswald text-primary mb-4'>THANK YOU!</h2>
				<p className='text-gray-600 mb-8 text-sm'>
					Your membership registration has been submitted successfully.
					<br />
					If you have any questions, feel free to contact us.
				</p>
				<p className='text-gray-800 font-medium mb-8'>Welcome to GISAU!</p>

				<button
					onClick={() => navigate('/')}
					className='bg-primary text-white px-8 py-2 rounded-full font-bold hover:bg-[#5a1e1e] transition-colors text-sm'
				>
					Return to Home
				</button>
			</div>
		</div>
	);

	if (isSubmitted) {
		return (
			<div className='min-h-screen bg-primary flex items-center justify-center p-4'>
				<Box className='absolute top-8 left-8'>
					<img src='/gisau-logo/gisau.svg' alt='GISAU Logo' className='h-16 w-auto' />
				</Box>

				{renderSuccess()}
			</div>
		);
	}

	return (
		<div className='min-h-screen flex flex-col bg-[#FFFDF5] relative overflow-hidden'>
			{/* Main Content */}
			<div className='flex-1 w-full max-w-7xl mx-auto px-4 py-8 relative z-10'>
				<h1 className='text-5xl font-bold font-oswald text-center text-primary mb-8 mt-4 tracking-wide uppercase'>
					GISAU MEMBERSHIP
				</h1>

				{renderStepIndicator()}

				<PaymentForm
					applicationId={`${import.meta.env.VITE_SQUARE_APPLICATION_ID}`}
					locationId={`${import.meta.env.VITE_SQUARE_LOCATION_ID}`}
					cardTokenizeResponseReceived={async (token, buyer) => {
						// await handleOnlinePayment(token.token);
						console.log(token.token);
					}}
				>
					<div className='mt-8 transition-opacity duration-500 ease-in-out'>
						{step === 1 && renderStep1()}
						{step === 2 && renderStep2()}
						{step === 3 && renderStep3()}
					</div>
				</PaymentForm>
			</div>

			{/* Background Decor */}
			<div
				className='absolute top-0 right-0 opacity-100 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)` }}
			></div>
			<div
				className='absolute bottom-0 left-0 opacity-100 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)`, transform: 'rotate(180deg)' }}
			></div>
		</div>
	);
}
