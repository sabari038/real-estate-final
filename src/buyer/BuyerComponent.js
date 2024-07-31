import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import PropertyDetails from './PropertyDetails';
import './BuyerComponent.css';

const BuyerComponent = () => {
  const [results, setResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const recommendedProperties = [
      { id: 1, location: 'Chennai', type: '4BHK Villa', size: '3000 sqft', price: '$450000', agent: { name: 'Ayush C.', contact: 'xxxxxx900' }, sale: true, details: 'Luxury villa in the heart of Chennai with modern amenities.' },
      { id: 2, location: 'Coimbatore', type: '2BHK Flat', size: '1000 sqft', price: '$4500/month', agent: { name: 'Nikhil M.', contact: 'xxxxxx930' }, sale: false, details: 'Spacious flat with a beautiful view of the city.' },
      { id: 3, location: 'Madurai', type: '3BHK Apartment', size: '1500 sqft', price: '$300000', agent: { name: 'Rahul S.', contact: 'xxxxxx950' }, sale: true, details: 'Apartment located in a prime area with all facilities nearby.' },
      { id: 4, location: 'Trichy', type: '1BHK Studio', size: '700 sqft', price: '$2000/month', agent: { name: 'Sneha P.', contact: 'xxxxxx960' }, sale: false, details: 'Compact studio apartment suitable for single occupancy.' },
    ];
    setResults(recommendedProperties);
  }, []);

  const handleSearch = (searchCriteria) => {
    const mockResults = [
      { id: 5, location: 'Salem', type: '5BHK Bungalow', size: '5000 sqft', price: '$600000', agent: { name: 'Vikram K.', contact: 'xxxxxx970' }, sale: true, details: 'Spacious bungalow with a private garden and swimming pool.' },
      { id: 6, location: 'Erode', type: '2BHK Flat', size: '1100 sqft', price: '$5000/month', agent: { name: 'Priya R.', contact: 'xxxxxx980' }, sale: false, details: 'Modern flat with a beautiful view of the mountains.' },
    ];
    const filteredResults = mockResults.filter(property => {
      return (
        (searchCriteria.sale ? property.sale : true) &&
        (searchCriteria.rent ? !property.sale : true) &&
        (searchCriteria.city ? property.location.includes(searchCriteria.city) : true) &&
        (searchCriteria.type ? property.type.includes(searchCriteria.type) : true) &&
        (searchCriteria.budgetMin ? parseInt(property.price.replace(/[^0-9]/g, ''), 10) >= searchCriteria.budgetMin : true) &&
        (searchCriteria.budgetMax ? parseInt(property.price.replace(/[^0-9]/g, ''), 10) <= searchCriteria.budgetMax : true)
      );
    });
    setResults(filteredResults);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="buyer-container">
      <SearchComponent onSearch={handleSearch} />
      <ResultsComponent results={results} onSelectProperty={handlePropertySelect} />
      {selectedProperty && <PropertyDetails property={selectedProperty} />}
    </div>
  );
};

export default BuyerComponent;
