import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import PropertyDetails from './PropertyDetails';
import './BuyerComponent.css';

const BuyerComponent = () => {
  const [results, setResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    // Fetch initial recommended properties or handle empty state
    const fetchRecommendedProperties = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/properties');
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching recommended properties:', error);
      }
    };
    
    fetchRecommendedProperties();
  }, []);

  const handleSearch = async (searchCriteria) => {
    try {
      const response = await fetch('http://localhost:8080/api/properties/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchCriteria),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
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
