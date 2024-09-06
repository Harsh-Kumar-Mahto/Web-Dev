import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component/Component'

function App() {

  return (
    <>
    <h1 className='text-amber-950 mb-10'>This project is done by useState in the video but I have made a component</h1>
      <div style={{backgroundColor:"cyan", padding:"0.3rem",borderRadius:"1rem"}}>    {/* {{}} helps to inject variable in style tag however we have not used but we can*/}
        <Component color="Red" Name="red" />
        <Component color="Green" Name="green"/>
        <Component color="Blue" Name="blue" />
        <Component color="Olive" Name="olive" />
        <Component color="Gray" Name="gray" />
        <Component color="Yellow" Name="yellow" />
        <Component color="Pink" Name="pink" />
        <Component color="Purple" Name="purple" />
        {/* Onclick is special as it requires a function in it and not the value returned by it that is why we pass the reference of the function and don't execute it. If we want to use setState then also we have to make it as below function, 
        if we directly assign values in () it will not work...  onClick={setState(req)}: this will not work. */}
        <button onClick={()=>{document.body.style.backgroundColor="white"}} className={`bg-white text-black rounded-xl m-1`}>White</button>   {/* Here also {`${}`} is helping us to inject variable*/}
        <Component color="Black" Name="black" />
      </div>
    </>
  )
}

export default App
