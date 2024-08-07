import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Listing.css';

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [editListing, setEditListing] = useState(null);
  const [updatedListing, setUpdatedListing] = useState({
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

  useEffect(() => {
    // Fetch all properties from the backend when the component mounts
    axios.get('http://localhost:8080/api/properties')
      .then(response => {
        setListings(response.data);
      })
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditListing = (listing) => {
    setEditListing(listing.id);
    setUpdatedListing(listing);
  };

  const handleSaveListing = () => {
    // Update the listing in the backend
    axios.put(`http://localhost:8080/api/properties/${editListing}`, updatedListing)
      .then(response => {
        if (response.status === 200) {
          setListings((prev) =>
            prev.map((listing) => (listing.id === editListing ? updatedListing : listing))
          );
          setEditListing(null);
        } else {
          console.error('Error updating listing:', response.statusText);
        }
      })
      .catch(error => console.error('Error updating listing:', error));
  };

  const handleDeleteListing = (id) => {
    // Delete the listing in the backend
    axios.delete(`http://localhost:8080/api/properties/${id}`)
      .then(response => {
        if (response.status === 204) {
          setListings((prev) => prev.filter((listing) => listing.id !== id));
        } else {
          console.error('Error deleting listing:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting listing:', error));
  };

  return (
    <div className="mylistwhole">
      <div className="my-listing-container">
        <div className="my-listing-list">
          <h2 className="my-listing-list-header">All Listings</h2>
          <ul className="my-listing-list-ul">
            {listings.map((listing) => (
              <li key={listing.id} className="my-listing-list-item">
                {editListing === listing.id ? (
                  <div className="my-listing-edit-form">
                    <input
                      type="text"
                      name="location"
                      value={updatedListing.location}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="bhk"
                      value={updatedListing.bhk}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="propertyType"
                      value={updatedListing.propertyType}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="size"
                      value={updatedListing.size}
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
                    <label>
                      Sale:
                      <input
                        type="checkbox"
                        name="sale"
                        checked={updatedListing.sale}
                        onChange={(e) => setUpdatedListing((prev) => ({ ...prev, sale: e.target.checked }))}
                      />
                    </label>
                    <label>
                      Rent:
                      <input
                        type="checkbox"
                        name="rent"
                        checked={updatedListing.rent}
                        onChange={(e) => setUpdatedListing((prev) => ({ ...prev, rent: e.target.checked }))}
                      />
                    </label>
                    <textarea
                      name="details"
                      value={updatedListing.details}
                      onChange={handleEditChange}
                      className="my-listing-edit-textarea"
                    />
                    <input
                      type="text"
                      name="agentName"
                      value={updatedListing.agentName}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <input
                      type="text"
                      name="agentContact"
                      value={updatedListing.agentContact}
                      onChange={handleEditChange}
                      className="my-listing-edit-input"
                    />
                    <button onClick={handleSaveListing} className="my-listing-save-button">Save</button>
                  </div>
                ) : (
                  <div className="my-listing-view-item">
                    <p className="my-listing-item-location">Location: {listing.location}</p>
                    <p className="my-listing-item-bhk">BHK: {listing.bhk}</p>
                    <p className="my-listing-item-propertyType">Property Type: {listing.propertyType}</p>
                    <p className="my-listing-item-size">Size: {listing.size}</p>
                    <p className="my-listing-item-price">Price: {listing.price}</p>
                    <p className="my-listing-item-sale">Sale: {listing.sale ? 'Yes' : 'No'}</p>
                    <p className="my-listing-item-rent">Rent: {listing.rent ? 'Yes' : 'No'}</p>
                    <p className="my-listing-item-details">Details: {listing.details}</p>
                    <p className="my-listing-item-agentName">Agent Name: {listing.agentName}</p>
                    <p className="my-listing-item-agentContact">Agent Contact: {listing.agentContact}</p>
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



export default Listing;
