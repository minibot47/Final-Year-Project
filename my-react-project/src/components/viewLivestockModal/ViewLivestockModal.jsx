import React from "react";
import "./view-livestock-modal.css";

const ViewLivestockModal = ({ open, handleClose, livestock }) => {
  if (!open) return null;
  // console.log(livestock.animal?.id, "hehhe" );
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <h2>View Livestock Details</h2>
        <div className="livestock-details">
          <div>ID: {livestock.animal?.id}</div>
          <div>Specie: {livestock.animal?.specie}</div>
          <div>Last Treatment: {livestock.animal?.last_treatment}</div>
          <div>
            Status: <span>{livestock.animal?.status}</span>
          </div>
          <div>Disease: {livestock.animal?.disease}</div>
          <div>Body Temperature: {livestock?.animal?.temperature}°C</div>
        </div>
        <button className="info-button">Disease Information</button>
      </div>
    </div>
  );
};

export default ViewLivestockModal;
