import React from 'react';
import '../styles/Popup.css';

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <p>Grab your curiosity and a bit of patience.
          Some projects may take the scenic route and might take longer. 
          Thanks for being patiently awesome!</p>
      </div>
    </div>
  );
}

export default Popup; 