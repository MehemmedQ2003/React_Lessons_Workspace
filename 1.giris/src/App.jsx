import './App.css'

function App() {
  // let a = 30;
  // let b = 70;

  // let result = true;
  let names = ["Muhammad", "Metin", "Musa", "Mustafa"]
  return (
    <>
      {/* {result ? <p>{a + b}</p>: <p>{a - b}</p>} */}
      
      {/* {(a + b)> 50 ? <p>You win</p>: <p>You lose</p>} */}

      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <h1>{name}</h1>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
