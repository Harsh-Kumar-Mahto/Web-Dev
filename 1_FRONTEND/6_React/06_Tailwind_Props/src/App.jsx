import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let Obj={
    key1: "val1",
    key2: "val2"
  }

  let Arr=['1','2','3']

  return (
    <>
      <p>In this project we are implementing tailwind and also learning the concept of component in which we make a particular repeatedly required code block into a component and reuse it by passing the required values</p>
      <h1 className='bg-green-600 p-2 mb-8 mt-8 text-black rounded-xl'>Tailwind Test</h1>
      {/* This card is now a component and can be used again and again */}
      <Card name="Reeta" role="Engineer" myObj={Obj} myArr={Arr}/>  {/* We can also pass object and arrays as props but then we have to pass them in "{}" */}
    </>
  )
}

export default App
