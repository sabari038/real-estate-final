import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetailsPage.css';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const amenities = [
    "Swimming pool",
    "Gym",
    "24/7 Security",
    "Parking",
    "Garden",
    "Playground",
    "Clubhouse"
  ];

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:8080/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        setError('Error fetching property details');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!property) {
    return <p>No property found.</p>;
  }

  return (
    <div className="property-details-page">
      <img src={property.image} alt={`${property.propertyType} in ${property.location}`} className="property-image" />
      <div className="property-details-container">
        <h2>{property.propertyType} in {property.location}</h2>
        <div className="property-bhk"><strong>BHK:</strong> {property.bhk}</div>
        <div className="property-size"><strong>Size:</strong> {property.size}</div>
        <div className="property-price"><strong>Price:</strong> {property.sale ? `Buy at ${property.price}` : `Rent at ${property.price}`}</div>
        <div className="property-agent">
          <strong>Agent:</strong> {property.agentName}, {property.agentContact}
        </div>
        <div className="property-details"><strong>Details:</strong> {property.details}</div>
        <div className="property-features">
          <h3>Features:</h3>
          <ul>
            {property.features && property.features.length > 0 ? (
              property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            ) : (
              <li>No features listed</li>
            )}
          </ul>
        </div>
        <div className="property-amenities">
          <h3>Amenities:</h3>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
