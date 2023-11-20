import React from 'react';
import { Card,
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

export function Sidebar() {
	const [open, setOpen] = React.useState(0);
	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<Card
			className='h-[calc(100vh-2rem)] w-full h-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gamesRed'
			style={{ height: '100vh', borderRadius: '0 30px 30px 0', color: 'white' }}
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
				<img src={logo} href='/home' alt='GISAU logo red' style={{ maxWidth: '70px', height: 'auto' }} />
				<Typography variant='h5' color='blue-gray'>
					GISAU GAMES
				</Typography>
				<img src={rectangle} alt='border' style={{ maxWidth: '100px', height: 'auto', marginTop: '5px' }} />
			</div>
			<List>
				<Accordion
					open={open === 1}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
						/>
					}
				>
					<ListItem>
						<ListItemPrefix>
							<IoMdHome className='h-5 w-5' />
						</ListItemPrefix>
						Dashboard
					</ListItem>
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
							<ListItem>
								<ListItemPrefix>
									<ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
								</ListItemPrefix>
								Game A
							</ListItem>
							<ListItem>
								<ListItemPrefix>
									<ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
								</ListItemPrefix>
								Game B
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open === 2}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
						/>
					}
				/>
				<ListItem>
					<ListItemPrefix>
						<FaGift className='h-5 w-5' />
					</ListItemPrefix>
					Redeem Points
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						<IoMdSettings className='h-5 w-5' />
					</ListItemPrefix>
					Settings
				</ListItem>
			</List>
			<List style={{ position: 'absolute', bottom: '10px' }}>
				<ListItem>
					<ListItemPrefix>
						<FaSignOutAlt className='h-5 w-5' />
					</ListItemPrefix>
					Sign Out
				</ListItem>
			</List>
		</Card>
	);
}
