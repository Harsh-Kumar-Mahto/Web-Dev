import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // This is basic javascript we need to acces each of the elements in UI and update all the counter(suppose if we display counter in multiple places)
  // In these conditions,hook of react is used for updating all the variables in UI automatically

  // let counter=0;
  // function incrementvalue(){
  //   document.querySelector("h3").innerText=`Counter is ${++counter}`    similarly decrement function can be made


  let [counter,setCounter]= useState(0)    //useState is a hook which is used to initialize the start value and manage it in UI and it return two things
  // first one is the variable itself which can be given any name and the second one is a function which is used to update the value of the variable
  
  function incrementvalue(){
    // counter=counter+1
    // setCounter(counter)
    
    // setCounter(counter+1)   //short 

    // setCounter(counter+1)   //insipite of these multiple setcounter, the value will only increase by one as useState sends them all in a batch and as they are doing the same thing, it is done only once
    // setCounter(counter+1)   //to increment multiple times we have to write a function instide set method as below
    // setCounter((prevCounter)=>prevCounter+1)  //this function takes the previous value of the counter and can be given any name and then we can update it. Now here values will start increment by two

    setCounter(++counter)   //this is the another way in which multiple increments can be done
    setCounter(++counter)
    setCounter(++counter)
  }
  
  function decrementvalue(){
    if(counter>0){setCounter(--counter)}
    else{setCounter(counter)}
  }

  return (
    <>
      <h1>This is a counter made by me</h1>
      <h3>Counter is {counter}</h3>
      <button onClick={incrementvalue}>Increment</button>
      <button onClick={decrementvalue}>Decrement</button>
      <h3>Counter is {counter}</h3>
    </>
  )
}

export default App
