import { Box } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as NavLogo } from '../../assets/gisau_white.svg'
import { pages } from './constants'

const NavigationBar = () => {
    return (
        <>
            <Box className="bg-[#D9D9D9]/50">
                <Box>
                    <Link className='' to='/'>
                        <NavLogo />
                    </Link>
                </Box>
                <Box>
                    {pages.map((page) => (
                        <Link key={page.name} to={page.path} className=''>
                            {/* TODO: Style them */}
                            {page.name}
                        </Link>
                    ))}

                </Box>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </>
    )
}

export default NavigationBar