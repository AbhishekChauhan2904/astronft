import React, { useState, useEffect, useRef } from 'react';
import './MissionSection.css';
import astronautImage from '../assets/cycler.png'; // Assuming you saved the PNG as astronaut.png

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const missionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="our-mission"
      className={`mission-section ${isVisible ? 'slide-in' : ''}`}
      ref={missionRef}
    >
      <div className="mission-content">
        <div className="mission-text">
          
        </div>
        <div className="mission-image">
          <img src={astronautImage} alt="Astronaut" style={{width:'150px'}}/>
          <h6 style={{ fontWeight: 'lighter' }}>
            Interweaving scientific accuracy, high-quality <br></br>visualizations, and engaging storytelling to pioneer<br></br> the uncharted metaverse frontier.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
