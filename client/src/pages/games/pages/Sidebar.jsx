/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
import React from 'react';
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';
import logo from 'assets/gisau-logo/gisau.svg';
import rectangle from 'assets/games/Rectangle.png';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaGamepad, FaGift, FaSignOutAlt } from 'react-icons/fa';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import close from 'assets/games/close.svg';
import PersonIcon from '@mui/icons-material/Person';

function SelectableListItem({ prefixIcon: PrefixIcon, label, isSelected, onClick }) {
	return (
		<ListItem
			onClick={onClick}
			style={{
				backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<ListItemPrefix>
				<PrefixIcon className='h-5 w-5' />
			</ListItemPrefix>
			{label}
		</ListItem>
	);
}

export default function Sidebar({ username, picture, onCloseSidebar, currentPage, setCurrentPage }) {
	const [open, setOpen] = React.useState(0);
	const { logout } = useAuth0();
	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	const handleLogout = () => {
		logout({ logoutParams: { returnTo: `${window.location.origin.toString()}` } });
	};
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	const handleCloseSidebar = () => {
		setOpen(0);
		onCloseSidebar(false);
	};

	const handleMenuItemClick = (page) => {
		setCurrentPage(page);
		if (isMobileView) {
			handleCloseSidebar();
		}
	};

	const isCurrentPage = (page) => currentPage === page;

	return (
		<Card
			className='h-full max-w-[18rem] p-4
			shadow-xl shadow-blue-gray-900/5 bg-gamesRed'
			style={{
				height: '100dvh',
				width: isMobileView ? '75vw' : '20vw',
				borderRadius: '0 30px 30px 0',
				color: 'white',
			}}
		>
			<div
				className='mb-2 gap-4 p-4'
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					marginTop: '10px',
				}}
			>
				{isMobileView ? (
					<div onClick={handleCloseSidebar}>
						<img
							src={close}
							alt='close'
							style={{ maxWidth: '70px', height: 'auto', marginBottom: '20px' }}
						/>
					</div>
				) : (
					<img src={logo} href='/home' alt='GISAU logo red' style={{ maxWidth: '70px', height: 'auto' }} />
				)}

				<Typography variant='h5' color='blue-gray'>
					GISAU GAMES
				</Typography>
				<img src={rectangle} alt='border' style={{ maxWidth: '100px', height: 'auto', marginTop: '5px' }} />
			</div>
			<List>
				<SelectableListItem
					prefixIcon={IoMdHome}
					label='Dashboard'
					isSelected={isCurrentPage('Dashboard')}
					onClick={() => handleMenuItemClick('Dashboard')}
				/>
				<Accordion
					open={open === 1}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform 
			${open === 1 ? 'rotate-180' : ''}`}
						/>
					}
				>
					<ListItem className='p-0' selected={open === 1}>
						<AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 p-3'>
							<ListItemPrefix>
								<FaGamepad className='h-5 w-5' />
							</ListItemPrefix>
							<Typography color='blue-gray' className='mr-auto font-normal'>
								Games
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className='py-1' style={{ color: 'white' }}>
						<List className='p-0'>
							<SelectableListItem
								prefixIcon={ChevronRightIcon}
								label='Game A'
								isSelected={isCurrentPage('Game A')}
								onClick={() => handleMenuItemClick('Game A')}
							/>
							<SelectableListItem
								prefixIcon={ChevronRightIcon}
								label='Game B'
								isSelected={isCurrentPage('Game B')}
								onClick={() => handleMenuItemClick('Game B')}
							/>
						</List>
					</AccordionBody>
				</Accordion>
				<SelectableListItem
					prefixIcon={FaGift}
					label='Redeem Points'
					isSelected={isCurrentPage('Redeem')}
					onClick={() => handleMenuItemClick('Redeem')}
				/>
				<SelectableListItem
					prefixIcon={IoMdSettings}
					label='Settings'
					isSelected={isCurrentPage('Settings')}
					onClick={() => handleMenuItemClick('Settings')}
				/>
			</List>
			<List style={{ position: 'absolute', bottom: '10px' }}>
				{isMobileView && (
					<>
						<ListItem onClick={() => handleMenuItemClick('Profile')} className='left-[-1] ml-[-1]'>
							<div
								className='justify-center'
								style={{
									width: '50px',
									height: '50px',
									marginRight: '5px',
								}}
							>
								<img
									src={picture}
									alt='profile_pic'
									style={{
										width: 'auto',
										height: 'auto',
										objectFit: 'cover',
										borderRadius: '50%',
									}}
								/>
							</div>
							<div
								className='justify-center'
								style={{
									width: '80%',
									overflow: 'hidden',
									maxWidth: '80%',
								}}
							>
								<Typography style={{ fontWeight: 'bold', marginLeft: '5px' }}>{username}</Typography>
							</div>
						</ListItem>
						<ListItem onClick={() => handleMenuItemClick('Profile')}>
							<ListItemPrefix>
								<PersonIcon className='h-5 w-5' />
							</ListItemPrefix>
							View Profile
						</ListItem>
					</>
				)}
				<ListItem onClick={() => handleLogout()}>
					<ListItemPrefix>
						<FaSignOutAlt className='h-5 w-5 ml-1' />
					</ListItemPrefix>
					Sign Out
				</ListItem>
			</List>
		</Card>
	);
}