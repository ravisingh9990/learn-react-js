import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter = 1
  let [counter, setCounter] = useState(1)

  const addValue = ()=>{
    //counter = counter + 1;
    setCounter(counter + 1);
  }

  const removeValue = ()=>{
    setCounter(counter - 1);
  }


  return (
    <>
     <h1>Welcome to React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
