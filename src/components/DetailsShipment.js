import React from 'react';
import './DetailsShipment.css'

const ShipmentDetails = [
  {
    deliverynumber: 'The shipment has been delivered',
    lastUpdated: 'Monday 6/4/2020 at 5:00 PM',
    merchantName: 'SOUQ.COM',
    deliveryTimeWithin: '3 January 2020',
  },
];

const DetailsShipment = () => {
  return (
    <div className='shipment-list'>
      <ul>
        {ShipmentDetails.map((shipment) => (
          <li key={shipment.deliveryNumber}>
            <div className='shipment-info'>
              <div>
                <span>Shipment: {shipment.deliverynumber}</span>
              </div>
              <div>
                <span>Last Updated: {shipment.lastUpdated}</span>
              </div>
              <div>
                <span>Merchant: {shipment.merchantName}</span>
              </div>
              <div>
                <span>Delivery Time Within: {shipment.deliveryTimeWithin}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsShipment;














