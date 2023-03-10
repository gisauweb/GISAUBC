import React from 'react'
import "./Footer.css";
import { Email } from '@mui/icons-material';
import spotifyIcon from "assets/footer/spotify-icon.svg";
import instagramIcon from "assets/footer/instagram-icon.svg"
import linkedinIcon from "assets/footer/linkedin-icon.svg"
import facebookIcon from "assets/footer/facebook-icon.svg"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-title text-lg lg:text-3xl">Connect with us!</div>
            <div className="footer-icons">
                <a href='https://www.instagram.com/gisaubc/' className="icon"><img src={instagramIcon} alt="instagram-icon"/></a>
                <a href='https://ca.linkedin.com/company/gisau' className="icon"><img src={linkedinIcon} alt="linkedin-icon" /></a>
                <a href='https://www.facebook.com/gisaubc/' className="icon"><img src={facebookIcon} alt="facebook-icon" /></a>
                <a href='https://open.spotify.com/show/4n3LXi2mKxLpscsIGVAgnR?si=rwRFIioeRnKj7irYurgZsQ&app_destination=copy-link' className="icon"><img src={spotifyIcon} alt="spotify-icon" /></a>
            </div>
            <div className="footer-email text-base lg:text-2xl">
                <a href='mailto:contact.gisau@gmail.com'><Email className='mr-1' />
                    contact.gisau@gmail.com</a>
            </div>
            <div className="footer-copyright text-base lg:text-2xl">GISAUBC &#169; 2022</div>
        </div>
    )
}