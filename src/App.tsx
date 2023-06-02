import { NBButton } from '.';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <NBButton debugSafeArea animation='top'>
        Hola
      </NBButton>
      <NBButton bgColor='#fba979' animation='topLeft'>
        Hello
      </NBButton>
    </>
  );
}
