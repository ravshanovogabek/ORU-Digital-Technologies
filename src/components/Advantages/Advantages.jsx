import React from 'react';
import './advantages.css'; // Import the CSS file

// Import the local images
import smartTechnologies from '../../assets/images/dasturlash.jpg';
import advancedSolutions from '../../assets/images/world.jpg';
import futureReady from '../../assets/images/ai.jpg';

const Advantages = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-item">
        <img
          className="advantages-image"
          src={smartTechnologies} // Using the local image
          alt="Smart technologies"
        />
        <div className="advantages-text1">
          <p>
            Innovative <br />
            solutions <br />
            for modern problems.
          </p>
        </div>
      </div>
      <div className="advantages-item">
        <img
          className="advantages-image"
          src={advancedSolutions} // Using the local image
          alt="Advanced Solutions"
        />
        <div className="advantages-text2">
          <p>
            High tech approaches <br/>
            to everyday <br/>
            needs.
          </p>
        </div>
      </div>
      <div className="advantages-item">
        <img
          className="advantages-image"
          src={futureReady} // Using the local image
          alt="Future-Ready"
        />
        <div className="advantages-text3">
          <p>
            Preparing <br />
            today <br />
            for the world of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
