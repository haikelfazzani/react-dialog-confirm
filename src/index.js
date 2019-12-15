import React, { useState } from 'react';
import { render } from "react-dom";
import './index.css'
import ConfirmBox from './lib/components/ConfirmBox';

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  const handleConfirm = () => { alert('yes button clicked'); }
  const handleCancel = () => { alert('no button clicked'); }

  return (
    <div className="container-fluid">
      <button onClick={handleClose}>open confirm box</button>

      <p>Simple react confirm dialog</p>
      
      <ConfirmBox // all props are required
        icon="https://img.icons8.com/clouds/100/000000/vector.png"
        label={{
          text: 'Are you sure you want to delete this element?',
          confirm: 'yes',
          cancel: 'no'
        }}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

    </div>
  );
}

render(<App />, document.getElementById("root"));
