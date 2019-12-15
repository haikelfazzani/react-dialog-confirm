## 📋 ConfirmBox   
A lightweight React component confirm alert dialog (responsive).  

[Demo](https://react-dialog-confirm.onrender.com)

![bundlephobia badge](https://badgen.net/npm/v/react-dialog-confirm) ![bundlephobia badge](https://badgen.net/bundlephobia/min/react-dialog-confirm) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/react-dialog-confirm)

```
npm i react-dialog-confirm
```

### Usage
```js
import ConfirmBox from "react-dialog-confirm";
import '../node_modules/react-dialog-confirm/build/index.css'; // required

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
```

### Examples:
```js
const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => { setIsOpen(!isOpen) }

  const handleConfirm = () => { alert('yes button clicked'); }
  const handleCancel = () => { alert('no button clicked'); }

  return (
    <>
      <button onClick={handleClose}>open confirm box</button>
      
      <ConfirmBox // all props are required
        icon="https://img.icons8.com/clouds/100/000000/vector.png"
        label={{
          text: 'Are you sure you want to delete this element?',
          confirm: 'yes',
          cancel: 'no'
        }}
        isOpen={isOpen} // to close or open dialog (true | false)
        onClose={handleClose} // to close or open dialog
        onConfirm={handleConfirm} // return yes : if button yes clicked
        onCancel={handleCancel} // return no : button no clicked
      />
    </>
  );
}
```

### License
MIT