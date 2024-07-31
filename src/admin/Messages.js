import React, { useState } from 'react';
import './Messages.css';

const initialMessages = [
  { id: 1, sender: 'Prasad', content: 'Interested in The Apartment for Sale', date: 'Feb 19' },
  { id: 2, sender: 'Ramya', content: 'Interested in The House for Sell in Nairobi County', date: 'Feb 19' },
  { id: 3, sender: 'Priscilla Johnson', content: 'Interested in The House for Sell in Nairobi County', date: 'Feb 19' },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDelete = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  const handleView = (message) => {
    setSelectedMessage(message);
  };

  const handleClose = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="meswhole">
      <div className="messages-container">
        <h2>Inbox Messages</h2>
        <ul className="messages-list">
          {messages.map(message => (
            <li key={message.id} className="message-item">
              <span className="message-sender">{message.sender}</span>
              <span className="message-content">{message.content}</span>
              <div className="message-actions">
                <button className="message-delete" onClick={() => handleDelete(message.id)}>
                  <i className="fas fa-trash"></i>
                </button>
                <button className="message-view" onClick={() => handleView(message)}>
                  <i className="fas fa-envelope"></i>
                </button>
                <span className="message-date">{message.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedMessage && (
        <div className="message-detail">
          <h3>Message Detail</h3>
          <p><strong>Sender:</strong> {selectedMessage.sender}</p>
          <p><strong>Content:</strong> {selectedMessage.content}</p>
          <p><strong>Date:</strong> {selectedMessage.date}</p>
          <button className="message-close" onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Messages;
