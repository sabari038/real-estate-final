import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    street: '',
    city: '',
    state: '',
    type: 'Flat',
    budgetMin: '',
    budgetMax: '',
    areaMin: '',
    areaMax: '',
    rent: false,
    sale: true,
    bhk: 3,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSearch = () => {
    onSearch(searchCriteria);
  };

  return (
    <div className="search-container">
      <div className="search-fields">
        <input type="text" name="street" placeholder="Street" value={searchCriteria.street} onChange={handleInputChange} />
        <select name="city" value={searchCriteria.city} onChange={handleInputChange}>
          <option value="">City</option>
          <option value="Chennai">Chennai</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Madurai">Madurai</option>
          <option value="Trichy">Trichy</option>
          <option value="Salem">Salem</option>
          <option value="Erode">Erode</option>
        </select>
        <select name="state" value={searchCriteria.state} onChange={handleInputChange}>
          <option value="">State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
        <select name="type" value={searchCriteria.type} onChange={handleInputChange}>
          <option value="Flat">Flat</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Bungalow">Bungalow</option>
        </select>
        <input type="number" name="budgetMin" placeholder="Min Budget" value={searchCriteria.budgetMin} onChange={handleInputChange} />
        <input type="number" name="budgetMax" placeholder="Max Budget" value={searchCriteria.budgetMax} onChange={handleInputChange} />
        <input type="number" name="areaMin" placeholder="Min Area" value={searchCriteria.areaMin} onChange={handleInputChange} />
        <input type="number" name="areaMax" placeholder="Max Area" value={searchCriteria.areaMax} onChange={handleInputChange} />
        <div className="toggle-buttons">
          <label>
            Rent
            <input type="checkbox" name="rent" checked={searchCriteria.rent} onChange={handleInputChange} />
          </label>
          <label>
            Sale
            <input type="checkbox" name="sale" checked={searchCriteria.sale} onChange={handleInputChange} />
          </label>
        </div>
        <input type="number" name="bhk" placeholder="BHK" value={searchCriteria.bhk} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
