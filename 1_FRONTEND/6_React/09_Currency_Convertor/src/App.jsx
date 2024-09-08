import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Component/comp'

function App() {

  return (
    <>
    <h1 className='m-5'>Currency Convertor Incomplete</h1>
      <div>
      <Comp dir="From"/>
      <Comp dir="To" />
      </div>
    </>
  )
}

export default App
