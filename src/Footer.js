import React from 'react'
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import spotifyIcon from "./images/spotify-icon.png";
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-title">Connect with us!</div>
        <div className="footer-icons">
            <InstagramIcon fontSize="large" className="icon"/>
            <LinkedInIcon fontSize="large" className="icon"/>
            <FacebookIcon fontSize="large" className="icon"/>
            <img src={spotifyIcon} alt="spotify-icon"></img>
        </div>
        <div className="footer-email"><sub><EmailIcon/></sub>contact.gisau@gmail.com</div>
        <div className="footer-copyright">GISAUBC &#169; 2022</div>
    </div>
  )
}