import React, { useState, useEffect, useRef } from 'react';
import './MainSection.css';
import astronautVideo from '../assets/hevc-alpha.mov';
import MissionSection from './MissionSection';

const MainSection = () => {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getZoomScale = () => {
    const scale = 1 + scrollY / 1000; // Adjust the divisor to control zoom speed
    return scale > 2 ? 2 : scale; // Cap the zoom scale at 2x
  };

  return (
    <section id="about-us" className="main-section slide-in">
      <div className="astro-nft-text">
        <h1>Astro NFT</h1>
        <p>
          Exclusively for Genesis NFT Holders, our Astro NFT collection is the first metaverse
          wearable created for Everdome.
        </p>
        <button className="connect-wallet">Connect your wallet</button>
      </div>
      <div className="astro-video">
        <video
          ref={videoRef}
          src={astronautVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ transform: `scale(${getZoomScale()})` }} // Zoom effect
        />
      </div>
    </section>
  );
};

export default MainSection;
