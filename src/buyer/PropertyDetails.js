<<<<<<< HEAD
import React from 'react';
import './PropertyDetails.css';

const PropertyDetails = ({ property }) => {
  if (!property) {
    return <div className="property-details-container">No property selected.</div>;
  }

  return (
    <div className="property-details-container">
      <h2>{property.propertyType} in {property.location}</h2>
      <div className="property-bhk"><strong>BHK:</strong> {property.bhk}</div>
      <div className="property-size"><strong>Size:</strong> {property.size}</div>
      <div className="property-price"><strong>Price:</strong> {property.sale ? `Buy at ${property.price}` : `Rent at ${property.price}`}</div>
      <div className="property-agent">
        <strong>Agent:</strong> {property.agentName}, {property.agentContact}
      </div>
      <div className="property-details"><strong>Details:</strong> {property.details}</div>
    </div>
  );
};

export default PropertyDetails;
=======
import React from 'react';
import './PropertyDetails.css';

const PropertyDetails = ({ property }) => {
  return (
    <div className="property-details-container">
      <h2>{property.type} in {property.location}</h2>
      <div className="property-size"><strong>Size:</strong> {property.size}</div>
      <div className="property-price"><strong>Price:</strong> {property.sale ? `Buy at ${property.price}` : `Rent at ${property.price}`}</div>
      <div className="property-agent"><strong>Agent:</strong> {property.agent.name}, {property.agent.contact}</div>
      <div className="property-details"><strong>Details:</strong> {property.details}</div>
    </div>
  );
};

export default PropertyDetails;
>>>>>>> cc383eb2b8b88eeb384a8ebf824559dd6a19b93f
