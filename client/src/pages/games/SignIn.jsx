export default function SignIn({ login }) {
	return (
		<div className='relative h-screen flex items-center text-center justify-center bg-primary'>
			<div className='absolute top-8 left-8'>
				<img src='/gisau-logo/gisau.svg' alt='GISAU Logo' className='h-16 w-auto' />
			</div>
			<div
				className='absolute top-0 right-0 opacity-10 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)` }}
			/>
			<div
				className='absolute bottom-0 left-0 opacity-10 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)`, transform: 'rotate(180deg)' }}
			/>
			<div className='relative z-10 bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full mx-4 border border-gray-100'>
				<h1 className='text-4xl font-bold font-oswald text-primary mb-2 tracking-wide'>GISAU</h1>
				<p className='text-gray-500 mb-8 font-medium'>Membership Portal</p>

				<button
					onClick={login}
					className='flex items-center justify-center gap-3 w-full bg-white border-2 border-gray-200 py-3 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm text-sm'
				>
					<svg className='w-5 h-5 mr-3' viewBox='0 0 48 48'>
						<path
							fill='#EA4335'
							d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
						/>
						<path
							fill='#4285F4'
							d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
						/>
						<path
							fill='#FBBC05'
							d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z'
						/>
						<path
							fill='#34A853'
							d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
						/>
					</svg>
					Sign in with Google
				</button>

				<p className='mt-6 text-[10px] text-gray-400 uppercase tracking-widest'>
					Gado-gado Indonesian Students Association
				</p>
			</div>
		</div>
	);
}
