import { Display } from './components/Display'
import './App.css'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    if (number >= 9) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  }

  return (
    <div id="display-container">
      <div id="display">
        <Display number={number}/>
      </div>
      <div id="button-container">
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  )
}

export default App
