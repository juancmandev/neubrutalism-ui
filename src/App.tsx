import { useState } from 'react';
import { NBButton } from '.';
import { NBBox } from './components/NBBox';
import { NBDialog } from './components/NBDialog';
import '@/styles/globals.css';
import { NBDropdownActionable } from './components/NBDropdownActionable';
import { NBInput } from './components/NBInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NBHeader } from './components/NBHeader';

export default function App() {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      input: '',
    },
    initialErrors: {
      input: '',
    },
    validationSchema: Yup.object({
      input: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <NBHeader
        logo={<h1>Logo</h1>}
        navItems={[<a href='/'>Home</a>, <a href='/'>About</a>]}
      />
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

      <form onSubmit={formik.handleSubmit}>
        <NBInput
          id='input'
          type='text'
          onBlur={formik.handleBlur}
          value={formik.values.input}
          onChange={formik.handleChange}
          onTouched={formik.touched.input}
          onError={formik.errors.input}
          placeholder='Input example'
        />
        <NBButton type='submit'>Submit</NBButton>
      </form>
    </>
  );
}
