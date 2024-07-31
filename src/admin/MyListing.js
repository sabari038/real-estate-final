import React, { useState } from 'react';
import './MyListing.css';

const MyListing = () => {
  const [listings, setListings] = useState([
    { id: 1, category: 'Apartment', address: '123 Main St', price: '$1200/month' },
    { id: 2, category: 'House', address: '456 Oak St', price: '$2500/month' },
  ]);

  const [editListing, setEditListing] = useState(null);
  const [updatedListing, setUpdatedListing] = useState({ category: '', address: '', price: '' });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditListing = (listing) => {
    setEditListing(listing.id);
    setUpdatedListing(listing);
  };

  const handleSaveListing = () => {
    setListings((prev) =>
      prev.map((listing) => (listing.id === editListing ? updatedListing : listing))
    );
    setEditListing(null);
  };

  const handleDeleteListing = (id) => {
    setListings((prev) => prev.filter((listing) => listing.id !== id));
  };

  return (
    <div className="mylistwhole">
      <div className="my-listing-container">
        <div className="my-listing-list">
          <h2 className="my-listing-list-header">Your Listings</h2>
          <ul className="my-listing-list-ul">
            {listings.map((listing) => (
              <li key={listing.id} className="my-listing-list-item">
                {editListing === listing.id ? (
                  <div className="my-listing-edit-form">
                    <input
                      type="text"
                      name="category"
                      value={updatedListing.category}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="address"
                      value={updatedListing.address}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="price"
                      value={updatedListing.price}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <button onClick={handleSaveListing} className="my-listing-save-button">Save</button>
                  </div>
                ) : (
                  <div className="my-listing-view-item">
                    <p className="my-listing-item-category">Category: {listing.category}</p>
                    <p className="my-listing-item-address">Address: {listing.address}</p>
                    <p className="my-listing-item-price">Price: {listing.price}</p>
                    <button onClick={() => handleEditListing(listing)} className="my-listing-edit-button">Edit</button>
                    <button onClick={() => handleDeleteListing(listing.id)} className="my-listing-delete-button">Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyListing;
