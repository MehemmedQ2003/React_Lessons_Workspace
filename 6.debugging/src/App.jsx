import { useState } from 'react'
import './App.css'

function App() {
  
  const [mitderm1, setMitderm1] = useState(0);
  const [mitderm2, setMitderm2] = useState(0);
  
  const findAverage = () => {
    // debugger;
    const resultSum = sum();
    write(resultSum / 2);
  }

  const sum = () => {
    const sumOfMitderm = mitderm1 + mitderm2;
    // debugger;
    return sumOfMitderm;
  }

  const write = (result) => {
    // debugger;
    console.log("Average : " + result);
  }

  return (
      <div>
        <div>
          <input type='number'  onChange={(e) => setMitderm1(Number(e.target.value))}/>
        </div>
        <div>
          <input type='number'  onChange={(e) => setMitderm2(Number(e.target.value))}/>
        </div>
        <div>
          <button onClick={findAverage}>Find Average</button>
        </div>
      </div>
  )
}

export default App
