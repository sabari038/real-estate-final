import React, { useState } from 'react';
import './Listing.css';

const Listing = () => {
  const [listings, setListings] = useState([
    { id: 1, category: 'Apartment', address: '123 Main St', price: '$1200/month' },
    { id: 2, category: 'House', address: '456 Oak St', price: '$2500/month' },
  ]);

  const [newListing, setNewListing] = useState({ category: '', address: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddListing = () => {
    setListings((prev) => [...prev, { id: listings.length + 1, ...newListing }]);
    setNewListing({ category: '', address: '', price: '' });
  };

  return (
    <div className="listing-container">
      <h1 className="listing-header">Listing</h1>
      <p className="listing-description">View all property listings here.</p>
      <div className="listing-list">
        <h2 className="listing-list-header">View Listings</h2>
        <ul className="listing-list-ul">
          {listings.map((listing) => (
            <li key={listing.id} className="listing-list-item">
              <p className="listing-list-item-category">Category: {listing.category}</p>
              <p className="listing-list-item-address">Address: {listing.address}</p>
              <p className="listing-list-item-price">Price: {listing.price}</p>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Listing;
