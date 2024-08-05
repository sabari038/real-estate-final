import React, { useState } from 'react';
import axios from 'axios';
import './AddListing.css';

const AddListing = () => {
  const [listingData, setListingData] = useState({
    location: '',
    bhk: '',
    propertyType: '',
    size: '',
    price: '',
    sale: false,
    rent: false,
    details: '',
    agentName: '',
    agentContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData({
      ...listingData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setListingData({
      ...listingData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add listing logic using axios
    axios.post('http://localhost:8080/api/properties/add', listingData)
      .then(response => {
        console.log('Listing added successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the listing:', error);
      });
  };

  return (
    <div className="add-listing-container">
      <h1>Add Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" name="location" value={listingData.location} onChange={handleChange} required />
        </label>
        <label>
          BHK:
          <input type="text" name="bhk" value={listingData.bhk} onChange={handleChange} required />
        </label>
        <label>
          Property Type:
          <select name="propertyType" value={listingData.propertyType} onChange={handleChange} required>
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Villa">Villa</option>
          </select>
        </label>
        <label>
          Size:
          <input type="text" name="size" value={listingData.size} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={listingData.price} onChange={handleChange} required />
        </label>
        <label>
          Sale:
          <input type="checkbox" name="sale" checked={listingData.sale} onChange={handleCheckboxChange} />
        </label>
        <label>
          Rent:
          <input type="checkbox" name="rent" checked={listingData.rent} onChange={handleCheckboxChange} />
        </label>
        <label>
          Details:
          <textarea name="details" value={listingData.details} onChange={handleChange} required></textarea>
        </label>
        <label>
          Agent Name:
          <input type="text" name="agentName" value={listingData.agentName} onChange={handleChange} required />
        </label>
        <label>
          Agent Contact:
          <input type="text" name="agentContact" value={listingData.agentContact} onChange={handleChange} required />
        </label>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
