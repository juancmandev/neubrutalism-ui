import { useState } from 'react';
import { NBButton } from '.';
import { NBBox } from './components/NBBox';
import { NBDialog } from './components/NBDialog';
import '@/styles/globals.css';
import { NBMenuItem } from './components/NBMenuItem';

export default function App() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Services',
      url: '/services',
      submenu: [
        {
          title: 'For entrepreneurs',
          url: '/entrepreneurs',
        },
        {
          title: 'For students',
          url: '/students',
        },
        {
          title: 'For hobbyists',
          url: '/hobbyists',
        },
      ],
    },
  ];

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
      <NBBox>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
          }}>
          {menuItems.map((menu, index) => (
            <NBMenuItem items={menu} key={index} />
          ))}
        </ul>
      </NBBox>
    </>
  );
}
