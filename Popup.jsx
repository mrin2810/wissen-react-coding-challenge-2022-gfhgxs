import React from 'react';
import './Popup.css';

const Popup = ({ loggedIn = false }) => {
  return (
    <div className={`popup-container ${loggedIn ? 'success' : 'failure'}`}>
      {loggedIn ? 'Successfully logged in!' : 'Invalid username /password'}
    </div>
  );
};

export default Popup;
