import React, { useState } from 'react';
import './AddListing.css';

const AddListing = () => {
  const [listingData, setListingData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData({
      ...listingData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add listing
    console.log('Listing Data:', listingData);
  };

  return (
    <div className="add-listing-container">
      <h1>Add Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={listingData.title} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <select name="category" value={listingData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Apartment">Apartment</option>
            <option value="Office">Office</option>
            <option value="House">House</option>
            <option value="Retail">Retail</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description" value={listingData.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Price:
          <input type="number" name="price" value={listingData.price} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={listingData.address} onChange={handleChange} required />
        </label>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
