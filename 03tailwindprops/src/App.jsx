import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="bg-red-400 p-6 rounded-xl">Meet Our Members</h1>
    <Card username="Ravi Singh" info="Hello from Ravi Singh"/>
    <Card username="Ravi Chauhan" info="Hello From Ravi Chauhan"/>

    </>
  )
}

export default App
