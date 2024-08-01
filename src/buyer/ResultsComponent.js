import React from 'react';
import './ResultsComponent.css';

const ResultsComponent = ({ results, onSelectProperty }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="result-card" onClick={() => onSelectProperty(result)}>
            <div className="result-location">{result.location}</div>
            <div className="result-type">{result.propertyType}</div>
            <div className="result-size">{result.size}</div>
            <div className="result-price">{result.sale ? `Buy at ${result.price}` : `Rent at ${result.price}`}</div>
            <div className="result-agent">
              <strong>Agent Details:</strong>
              <div>{result.agentName}</div>
              <div>{result.agentContact}</div>
            </div>
            <div className="result-details">
              <strong>Details:</strong>
              <div>{result.details}</div>
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsComponent;
