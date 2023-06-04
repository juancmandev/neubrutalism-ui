import { useState } from 'react';
import { NBButton } from '.';
import { NBBox } from './components/NBBox';
import { NBDialog } from './components/NBDialog';
import '@/styles/globals.css';
import { NBDropdownActionable } from './components/NBDropdownActionable';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Neubrutalism UI</h1>
      <div>
        <NBButton>Hola</NBButton>
      </div>
      <NBButton onClick={() => setOpen((prev) => !prev)} bgColor='#fba979'>
        Hello Dialog
      </NBButton>
      <NBBox>Box!</NBBox>
      <NBDialog open={open} onClose={() => setOpen((prev) => !prev)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>Dialog</h1>
          <NBButton>Close</NBButton>
        </div>
      </NBDialog>

      <div style={{ height: '8px' }} />

      <NBDropdownActionable
        dropdownContent={
          <>
            <p>Hola</p>
            <NBDropdownActionable dropdownContent={<p>Products</p>}>
              Products
            </NBDropdownActionable>
          </>
        }>
        Dropdown
      </NBDropdownActionable>
    </>
  );
}
