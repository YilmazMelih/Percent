import React, { useState } from 'react';
import './Carousel.css';

const steps = [
  {
    title: 'Step 1: Choose a Character',
    description: 'Start by selecting a character from the alphabet to begin your design.',
  },
  {
    title: 'Step 2: Adjust the Circles',
    description: 'Manipulate the circles to change the width and location of the letterform.',
  },
  {
    title: 'Step 3: See the System',
    description: 'As you make changes, see how the entire font system updates in real-time.',
  },
  {
    title: 'Step 4: Export Your Font',
    description: 'Once you are happy with your design, export your font to use in your projects.',
  },
];

const Carousel = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep === steps.length - 1 ? prevStep : prevStep + 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? prevStep : prevStep - 1));
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentStep * 100}%)` }}>
        {steps.map((step, index) => (
          <div className="carousel-card" key={index}>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      {currentStep > 0 && <button className="carousel-button prev" onClick={prevStep}>&#10094;</button>}
      {currentStep < steps.length - 1 && <button className="carousel-button next" onClick={nextStep}>&#10095;</button>}
      <div className="carousel-dots">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentStep === index ? 'active' : ''}`}
            onClick={() => goToStep(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
