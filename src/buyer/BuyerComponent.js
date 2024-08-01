import React, { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import PropertyDetails from './PropertyDetails';
import './BuyerComponent.css';
import axios from 'axios';

const BuyerComponent = () => {
  const [results, setResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendedProperties = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get('http://localhost:8080/api/properties');
        setResults(response.data);
      } catch (error) {
        setError('Error fetching recommended properties');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecommendedProperties();
  }, []);

  const handleSearch = async (searchCriteria) => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.post('http://localhost:8080/api/properties/search', searchCriteria);
      setResults(response.data);
    } catch (error) {
      setError('Error fetching search results');
    } finally {
      setLoading(false);
    }
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="buyer-container">
      <SearchComponent onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && !loading && <p className="error-message">{error}</p>}
      {!loading && !error && <ResultsComponent results={results} onSelectProperty={handlePropertySelect} />}
      {selectedProperty && <PropertyDetails property={selectedProperty} />}
    </div>
  );
};

export default BuyerComponent;
