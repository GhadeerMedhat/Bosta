// Stepper.jsx

import React, { useState } from 'react';
import './Steeperline.css';

const Stepperline = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="stepper-container">
        <h1>More Details About Shipment</h1>
      <div className="step-indicator">Step: {currentStep}</div>
      <div className="step-content">
        {currentStep === 1 && <p>The Shipment has been created</p>}
        {currentStep === 2 && <p>The Shipment has been received from the merchant</p>}
        {currentStep === 3 && <p>The shipment went out for delivery </p>}
        {currentStep === 4 && <p>The shipment was not delivered, The shipment has been canceled by the merchant</p>}
      </div>
      <button onClick={handlePrev} disabled={currentStep === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentStep === 4}>
        Next
      </button>
    </div>
  );
};

export default Stepperline;
