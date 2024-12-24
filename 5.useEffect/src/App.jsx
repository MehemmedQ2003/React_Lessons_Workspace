import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("Always run");
  })

  useEffect(() => {
    console.log("Only run on first render");
  }, [])

  useEffect(() => {
    console.log("Only run on first render and update in first name");
  }, [firstName])

  useEffect(() => {
    console.log("Only run on first render and update in last name");
  }, [lastName])

  return (
    <>
      <div><button onClick={() => setFirstName("Muhammad")}>Change Name</button></div>
      <div><button onClick={() => setLastName("Gardashov")}>Change Last Name</button></div>
    </>
  )
}

export default App
