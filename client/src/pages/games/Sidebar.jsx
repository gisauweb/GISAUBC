import { Sidebar } from 'flowbite-react';
import { FaGamepad, FaGift, FaSignOutAlt } from 'react-icons/fa';
import { IoMdHome, IoMdSettings } from 'react-icons/io';
import logo from 'assets/gisau-logo/gisau.svg';
import rectangle from 'assets/games/Rectangle.png';
import React from 'react';

function NavGames() {
	return (
		<Sidebar style={{ height: '100vh', borderRadius: '0 30px 30px 0' }} className='bg-gamesRed rounded-r-3xl'>
			<Sidebar.ItemGroup>
				<Sidebar.Logo>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							marginTop: '20px',
						}}
					>
						<img
							src={logo}
							href='/home'
							alt='GISAU logo red'
							style={{ maxWidth: '70px', height: 'auto' }}
						/>
						<span style={{ marginTop: '20px' }}>GISAU Games</span>
						<img
							src={rectangle}
							alt='border'
							style={{ maxWidth: '100px', height: 'auto', marginTop: '20px' }}
						/>
					</div>
				</Sidebar.Logo>
			</Sidebar.ItemGroup>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item href='#' icon={IoMdHome}>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Collapse icon={FaGamepad} label='Games'>
						<Sidebar.Item href='#'>Game A</Sidebar.Item>
						<Sidebar.Item href='#'>Game B</Sidebar.Item>
					</Sidebar.Collapse>
					<Sidebar.Item href='#' icon={FaGift}>
						Redeem Points
					</Sidebar.Item>
					<Sidebar.Item href='#' icon={IoMdSettings}>
						Settings
					</Sidebar.Item>
					<Sidebar.Item href='#' icon={FaSignOutAlt} style={{ position: 'absolute', bottom: '20px' }}>
						Sign Out
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}

export default NavGames;
