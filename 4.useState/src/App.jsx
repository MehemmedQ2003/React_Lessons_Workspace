import { useState } from 'react'
import './App.css'

function App() {
  // ! const [firstName, setFirstName] = useState('');
  // ! const handleChange = () => {
  // !   setFirstName("Muhammad");
  // ! }

  // ! const [names, setNames] = useState(["Muhammad", "Metin", "Musa", "Mustafa"]);
  
  // ! const [userInfo, setUserInfo] = useState({name: "Muhammad", age: 21, job: "Frontend Developer"});

  // ! const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <>
      {/* <h1>{firstName}</h1>
      <input type='text' onChange={(e) => setFirstName(e.target.value)}/>
      <button type='button' onClick={handleChange}>Change Name</button> */}

      {/* <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul> */}


      {/* <div>
        <h1>{userInfo.name}</h1>
        <h2>{userInfo.age}</h2>
        <h3>{userInfo.job}</h3>
      </div> */}

      {/* <div>
        {show ? <h1>{userInfo.name} - {userInfo.age} - {userInfo.job}</h1> : <h1>Not Username</h1>}
      </div> */}

      <div>
        <h1>{count}</h1>
        <h1><button type='button' onClick={increase}>Increse</button></h1>
        <h1><button type='button' onClick={decrease}>Decrease</button></h1>
      </div>
      
    </>
  )
}

export default App
