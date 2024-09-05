import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const variable='Any variable'

  return (
    <>
      <p>
        This is made using npm create vite @latest and this is faster. After that npm install to create the build folder and then npm run dev
      </p>
      <p>Any variable can be written in a jsx file using curly braces as: Variable is {variable}</p>
    </>
  )
}

export default App
