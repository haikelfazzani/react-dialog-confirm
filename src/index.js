import React, { useState } from 'react';
import { render } from "react-dom";
import './index.css'
import ConfirmBox from './lib/components/ConfirmBox';

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }

  const handleConfirm = () => { alert('yes button clicked'); }
  const handleCancel = () => { alert('no button clicked'); }

  return (
    <div className="container-fluid">
      <button onClick={handleClose}>open confirm box</button>

      <p>Simple react confirm dialog Simple react confirm dialog Simple react confirm dialog</p>

      <ConfirmBox // all props are required        
        options={{
          icon:"https://img.icons8.com/clouds/100/000000/vector.png",
          text: 'Are you sure you want to delete this element?',
          confirm: 'yes',
          cancel: 'no',
          btn: true
        }}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
      </ConfirmBox>

    </div>
  );
}

render(<App />, document.getElementById("root"));
