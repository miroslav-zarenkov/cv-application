import { useState } from 'react';
import '../../sass/components/App.scss';

function App() {
  const [number, setNumber] = useState(0);
  function handleClick() {
    setNumber(number + 1);
  }
  return (
    <div className="test">
      <p>Hello, React!</p>
      <button onClick={handleClick}>{number}</button>
    </div>
  );
}

export default App;
