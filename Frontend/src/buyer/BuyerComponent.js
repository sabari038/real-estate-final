import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import './BuyerComponent.css';
import axios from 'axios';

const BuyerComponent = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendedProperties = async () => {
      setLoading(true);
      setError(null);
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
    setError(null);
    try {
      const response = await axios.post('http://localhost:8080/api/properties/search', searchCriteria, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error performing search:', error.response ? error.response.data : error.message);
      setError('Error performing search');
    } finally {
      setLoading(false);
    }
  };
  
  

  const handlePropertySelect = (property) => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="buyer-container">
      <SearchComponent onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && !loading && <p className="error-message">{error}</p>}
      {!loading && !error && <ResultsComponent results={results} onSelectProperty={handlePropertySelect} />}
    </div>
  );
};

export default BuyerComponent;
