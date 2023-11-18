'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import React from 'react';

function NavGames() {
	return (
		<Box className='flex flex-row left-0 h-screen bg-gamesRed w-20vw max-w-[220px] rounded-r-[30px]'>
			{/* No additional content */}
		</Box>
		// <Sidebar className='bg-gamesRed'>
		// 	<Sidebar.ItemGroup>
		// 		<Sidebar.Logo href='/home' img='/assets/gisau-logo/gisau.svg' imgAlt='Flowbite logo'>
		// 			GISAU
		// 		</Sidebar.Logo>
		// 	</Sidebar.ItemGroup>
		// 	<Sidebar.Items className='bg-transparent'>
		// 		<Sidebar.ItemGroup>
		// 			<Sidebar.Item href='#' icon={HiChartPie}>
		// 				Dashboard
		// 			</Sidebar.Item>
		// 			<Sidebar.Collapse icon={HiShoppingBag} label='E-commerce'>
		// 				<Sidebar.Item href='#'>Products</Sidebar.Item>
		// 				<Sidebar.Item href='#'>Sales</Sidebar.Item>
		// 				<Sidebar.Item href='#'>Refunds</Sidebar.Item>
		// 				<Sidebar.Item href='#'>Shipping</Sidebar.Item>
		// 			</Sidebar.Collapse>
		// 			<Sidebar.Item href='#' icon={HiInbox}>
		// 				Inbox
		// 			</Sidebar.Item>
		// 			<Sidebar.Item href='#' icon={HiUser}>
		// 				Users
		// 			</Sidebar.Item>
		// 			<Sidebar.Item href='#' icon={HiShoppingBag}>
		// 				Products
		// 			</Sidebar.Item>
		// 			<Sidebar.Item href='#' icon={HiArrowSmRight}>
		// 				Sign In
		// 			</Sidebar.Item>
		// 			<Sidebar.Item href='#' icon={HiTable}>
		// 				Sign Up
		// 			</Sidebar.Item>
		// 		</Sidebar.ItemGroup>
		// 	</Sidebar.Items>
		// </Sidebar>
	);
}

export default NavGames;
