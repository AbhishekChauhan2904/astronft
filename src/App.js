import React, { useEffect, useState } from 'react';
import LineAnimation from './components/LineAnimation';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import MissionSection from './components/MissionSection';
import Footer from './components/Footer';

function App() {
  const sections = [
    { id: 'about-us', title: 'About Us' },
    { id: 'our-mission', title: 'Our Mission' },
    // Add other sections here
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      let index = sectionElements.length;

      while (--index && window.scrollY + 50 < sectionElements[index].offsetTop) {}

      setActiveSection(sectionElements[index].id);
    };

    handleScroll(); // Initialize the first active section
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <LineAnimation />
      <Header />
      <MainSection />
      <MissionSection />
      <Sidebar sections={sections} activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
