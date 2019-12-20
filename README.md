## 📋 ConfirmBox   
A Nice & lightweight React component confirm alert dialog with nice animation (responsive).  

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
  options={{
    icon:"https://img.icons8.com/clouds/100/000000/vector.png",
    text: 'Are you sure you want to delete this element?', // alert text
    confirm: 'yes', // button text for cancel btn
    cancel: 'no', // button text for cancel btn
    btn: true // with or without buttons
  }}
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

### Example 1:
```js
const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => { setIsOpen(!isOpen) }

  const handleConfirm = () => { alert('yes button clicked'); }
  const handleCancel = () => { alert('no button clicked'); }

  return (
    <>
      <button onClick={handleClose}>open confirm box</button>
      
      <ConfirmBox // Note : in this example all props are required
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
      />
    </>
  );
}
```

### Example 2:  
you can pass any elment as children
```js
<button onClick={handleClose}>open confirm box</button>

<ConfirmBox
  options={{ btn: false }}
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>

<form>
  <input type="text" />
  <input type="text" />
  <button>click</button>
</form>

</ConfirmBox>        
```

### License
MIT