import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <a href="#">Sobre nosotros</a>
                <a href="#">Menú</a>
                <a href="#">Reservas</a>
            </nav>
            <div className="social-media">
                <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="/icons/tiktok.png" alt="TikTok" /></a>
                <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
            </div>
            <div className="footer-links">
                <a href="#">Política de privacidad</a> | <a href="#">Contáctenos</a>
            </div>
        </footer>
    );
};

export default Footer;