import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h1 className='logo'>ORU</h1>
      <nav className="footer-nav">
        <a href="#" className="footer-link">Asosiy</a>
        <a href="#projects" className="footer-link">Loyihalar</a>
        <a href="#services" className="footer-link">Xizmatlar</a>
        <a href="#faq" className="footer-link">Bog'lanish</a>
      </nav>
      <div className="footer-social">
        <a href="tel:+998944643808" className="footer-social-icon">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="https://t.me/ogabek_devs" className="footer-social-icon">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="https://dev--------/" className="footer-social-icon">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" className="footer-social-icon">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="footer-copyright">© 2024 ORU. Barcha huquqlar himoyalangan.</p>
    </div>
  </footer>
);

export default Footer;
