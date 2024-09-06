import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  //useState is a hook in which we give to things, first one is variable and another one is the function that is used to update the value of the variable
  //This hook is used to propogate the changed values to the UI of the website

  return (
    <>
      <h1>Counter Project</h1>
      Count is: {count}
      <br />
      <button onClick={()=>{if(count<20)setCount(count=>count+1)}}>Increase</button>    
      <button onClick={()=>{if(count>0)setCount(count=>count-1)}}>Decrease</button>
    </>
  )
}

export default App
