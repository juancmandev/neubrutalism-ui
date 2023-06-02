import { useState } from 'react';
import { NBButton } from '.';
import { NBBox } from './components/NBBox';
import { NBDialog } from './components/NBDialog';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1>App</h1>
      <NBButton>Hola</NBButton>
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
    </>
  );
}
