import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      <ul>
        <li className={activeSection === 'about-us' ? 'active' : ''}>
          <a href="#about-us">About Us</a>
        </li>
        <li className={activeSection === 'our-mission' ? 'active' : ''}>
          <a href="#our-mission">Our Mission</a>
        </li>
        <li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Character</a>
        </li>
        <li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Creation Process</a>
        </li><li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Gallery</a>
        </li><li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Special Element</a>
        </li><li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Creative Team</a>
        </li><li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Mint</a>
        </li><li className={activeSection === 'character' ? 'active' : ''}>
          <a href="#character">Contact</a>
        </li>
        {/* Add other sections similarly */}
      </ul>
    </div>
  );
};

export default Sidebar;
