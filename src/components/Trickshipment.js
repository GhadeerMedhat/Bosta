import React, { useState } from 'react';
import './Trickshipment.css';

const ShipmentDetails = [
  {
    branch: 'Nasr City',
    date: '4/5/2020',
    time: '12:30pm',
    details: 'The shipment has been created',
    results: 'Shipment Completed',
  },
  {
    branch: 'Cairo',
    date: '4/5/2020',
    time: '12:30pm',
    details: 'The shipment has been received from the merchant',
    results: 'Received from Merchant',
  },
  {
    branch: 'Fifth Settlement',
    date: '4/5/2020',
    time: '12:30pm',
    details: 'The shipment went out for delivery',
    results: 'Out for Delivery',
  },
  {
    branch: 'Maadi',
    date: '4/5/2020',
    time: '12:30pm',
    details: 'The shipment was not delivered, The shipment has been canceled by the merchant',
    results: 'Shipment Canceled',
  },
];

const TrackShipment = () => {
  const [selectedShipment, setSelectedShipment] = useState(null);
 

  return (
    <div className='shipment-list'>
      <table className='shipment-table'>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Date</th>
            <th>Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {ShipmentDetails.map((shipment) => (
            <tr key={shipment.branch}>
              <td>{shipment.branch}</td>
              <td>{shipment.date}</td>
              <td>{shipment.time}</td>
              <td>{shipment.details}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default TrackShipment;
