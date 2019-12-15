import React from 'react';
import './ConfirmBox.css'

export default function ConfirmBox ({ label, icon, isOpen, onClose, onConfirm, onCancel }) {

  return (
    <div className="confirm-box-container" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="confirm-box-content">
        <div className="confirm-box">

          <div className="confirm-box-header">
            <img src={icon} alt="icon" width="80" />
            <p>{label.text}</p>
          </div>

          <span className="confirm-box-close" onClick={onClose}>&times;</span>

          <div className="confirm-btn">
            <button onClick={onConfirm}>{label.confirm}</button>
            <button onClick={onCancel}>{label.cancel}</button>
          </div>

        </div>
      </div>
    </div>
  );
}
