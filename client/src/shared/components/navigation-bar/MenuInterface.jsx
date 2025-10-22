import { Link } from 'react-router-dom';
import { pages } from './constants';
import MenuLogo from './MenuLogo';

function MenuInterface({ isOpen, closeHandler, openHandler, hasLandingImage }) {
	const menuIconColor = !hasLandingImage && !isOpen ? 'bg-black' : 'bg-white';

	return (
		<div>
			<MenuLogo
				menuIconColor={menuIconColor}
				isOpen={isOpen}
				openHandler={openHandler}
				closeHandler={closeHandler}
			/>
			<div
				className={`bg-black fixed top-0 left-0 w-full h-full z-30 duration-500 ${
					isOpen ? 'block visible opacity-50' : 'hidden invisible opacity-0'
				}`}
				onClick={closeHandler}
			/>
			<div
				className={`fixed bg-primary top-0 right-0 w-84 h-full z-40  duration-1000 ${
					isOpen ? 'translate-x-0 visible' : 'invisible translate-x-full'
				}`}
			>
				<div className='fixed right-0 mt-1/4'>
					<div className='text-right mr-6 mt-6 sm:mr-20'>
						{pages.map((page) => (
							<Link key={page.name} to={page.path} onClick={closeHandler}>
								<p
									className='text-white hover:underline underline-offset-8 decoration-2
												font-oswald text-3xl leading-[250%] uppercase'
								>
									{page.name}
								</p>
							</Link>
						))}
						<Link to='/members' onClick={closeHandler}>
							<p
								className='text-white hover:underline underline-offset-8 decoration-2
												font-oswald text-3xl leading-[250%] uppercase
												flex flex-row items-center'
							>
								<img src='assets/navbar/member-icon.svg' alt='search.png' className='h-6 w-auto pr-4' />
								Become a Member
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuInterface;
