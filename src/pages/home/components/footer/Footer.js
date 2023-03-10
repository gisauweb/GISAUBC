import React from 'react'
import "./Footer.css";
import { LinkedIn, Facebook, Email } from '@mui/icons-material';
import spotifyIcon from "assets/footer/spotify-icon.svg";
import instagramIcon from "assets/footer/instagram-icon.svg"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title">Connect with us!</div>
            <div className="footer-icons">
                <img src={instagramIcon} alt="instagram-icon" className="icon"/>
                <LinkedIn fontSize="large" className="icon" />
                <Facebook fontSize="large" className="icon" />
                <img src={spotifyIcon} alt="spotify-icon" className="icon" />
            </div>
            <div className="footer-email">
                <Email className='mr-1' />
                contact.gisau@gmail.com
            </div>
            <div className="footer-copyright">GISAUBC &#169; 2022</div>
        </div>
    )
}