import React from 'react';
import './ConfirmBox.css';

export default function ConfirmBox ({ children, options, isOpen, onClose, onConfirm, onCancel }) {

  return (
    <div className="confirm-box-container" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="confirm-box-content">
        <div className="confirm-box flipInX">

          <div className="confirm-box-header">
            {children ?
              children
              : (<>
                <img src={options.icon} alt="icon" width="80" />
                <p>{options.text}</p>
              </>)}
          </div>

          <span className="confirm-box-close" onClick={onClose}>&times;</span>

          {options.btn && <div className="confirm-btn">
            <button onClick={onConfirm}>{options.confirm}</button>
            <button onClick={onCancel}>{options.cancel}</button>
          </div>}

        </div>
      </div>
    </div>
  );
}
