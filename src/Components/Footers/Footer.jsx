import React from 'react';
import './Footer.css';
import Footer_Logo from '../Assests/Frontend_Assets/logo_big.png'
import Instagram_icon from '../Assests/Frontend_Assets/instagram_icon.png'
import Pintester_icon from '../Assests/Frontend_Assets/pintester_icon.png'
import Whatsapp_icon from '../Assests/Frontend_Assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Footer_Logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={Instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icon-container">
          <img src={Pintester_icon} alt="Pintester" />
        </div>
        <div className="footer-icon-container">
          <img src={Whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright &copy; 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
