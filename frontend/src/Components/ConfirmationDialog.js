import React from "react";
import "./ConfirmationDialog.css";

const ConfirmationDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <div className="button-container">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
