import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Everdome Logo" className="logo" />
      <div style={{marginLeft:'600px'}}>
      <nav className="social-nav">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </nav>
      </div>
      <button className="mint-button">Mint Astro NFT</button>
    </header>
  );
};

export default Header;
