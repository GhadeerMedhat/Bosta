// TrackShipment.jsx

import React, { useState } from 'react';
import './Deliverytitle.css'

const Deliverytitle = () => {
  const [problemReported, setProblemReported] = useState(false);

  const handleReportProblem = () => {
    // Logic to handle reporting the problem
    setProblemReported(true);
  };

  return (
    <div className="shipment-container">
      <div className="delivery-address">
        <h2>Delivery address:</h2>
        <p>Talaat Harb Street</p>
      </div>

      <div className="problem-section">
        <h3>Is there a problem with your shipment?</h3>
        <button onClick={handleReportProblem} disabled={problemReported}>
          {problemReported ? 'Problem Reported' : 'Report Problem'}
        </button>
      </div>
    </div>
  );
};

export default Deliverytitle;
