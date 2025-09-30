/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import ringtone from 'assets/games/timer.mp3';
import { Sentry } from 'libs/sentry';

function MotivationalPopup({ isOpen, onClose }) {
	const [randomQuote, setRandomQuote] = useState(null);

	useEffect(() => {
		if (isOpen) {
			const audio = new Audio(ringtone);
			audio.play().catch((error) => Sentry.captureException('Audio playback error:', error));
			const quotes = [
				"Don't stop until you're proud.",
				'The secret of getting ahead is getting started.\n-Mark Twain',
				'Strive for progress, not perfection.',
				'Success is the sum of small efforts, repeated day in and day out.\n-Robert Collier',
				'Education is the most powerful weapon which you can use to change the world.\n-Nelson Mandela',
				'Failure is the opportunity to begin again more intelligently.\n-Henry Ford',
				'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\n-Thomas A. Edison',
				'You don’t have to be great to start, but you have to start to be great.\n-Zig Ziglar',
				'The way to get started is to quit talking and begin doing.\n-Walt Disney',
				'The future belongs to those who believe in the beauty of their dreams.\n-Eleanor Roosevelt',
				"It always seems impossible until it's done.\n-Nelson Mandela",
				'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\n-Albert Schweitzer',
			];
			setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
			<div className='bg-white p-5 rounded-lg shadow-lg max-w-sm'>
				<h2 className='text-lg font-bold mb-2'>Keep Going!</h2>
				{/* Render the quote with the author on a new line if present */}
				<p className='mb-4 whitespace-pre-line'>{randomQuote}</p>
				<button
					type='button'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold
					py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={onClose}
				>
					OK
				</button>
			</div>
		</div>
	);
}

export default MotivationalPopup;
