import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      We are not going to use App.jsx anywhere as we are using Router. We can delete this but I am keeping for remembering. In the main.jsx we are not rendering App.jsx which is responsible to show the UI
    </>
  )
}

export default App
