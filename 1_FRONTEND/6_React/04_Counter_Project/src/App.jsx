import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  //useState is a hook in which we give to things, first one is variable and another one is the function that is used to update the value of the variable
  //This hook is used to propogate the changed values to the UI of the website

  const increaseVal=()=>{
    if(count<20){
      // Inspite of these many additions, on one click value will only increment by one(concept of fibre)
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)

      // For this we have to just take previous value and then change it like:
      setCount((prevCounter)=>prevCounter+1)
      setCount((prevCounter)=>prevCounter+1)
      setCount((prevCounter)=>prevCounter+1)
      setCount((prevCounter)=>prevCounter+1)
      // Now this will increment the value by 4
    }
  }

  const decreaseVal=()=>{
    if(count>0){
      // Value will be incremented by 2
      setCount(count=>count-1)
      setCount(count=>count-1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      Count is: {count}
      <br />
      <button onClick={increaseVal}>Increase</button>    
      <button onClick={decreaseVal}>Decrease</button>
    </>
  )
}

export default App
