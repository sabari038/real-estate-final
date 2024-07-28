import React from 'react';
import './ResultsComponent.css';

const ResultsComponent = ({ results, onSelectProperty }) => {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.id} className="result-card" onClick={() => onSelectProperty(result)}>
          <div className="result-location">{result.location}</div>
          <div className="result-type">{result.type}</div>
          <div className="result-size">{result.size}</div>
          <div className="result-price">{result.sale ? `Buy at ${result.price}` : `Rent at ${result.price}`}</div>
          <div className="result-agent">
            <strong>Agent Details:</strong>
            <div>{result.agent.name}</div>
            <div>{result.agent.contact}</div>
          </div>
          <div className="result-details">
            <strong>Details:</strong>
            <div>{result.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;
