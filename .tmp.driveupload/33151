import { useState } from 'react'


function App() {
  const [color,setcolor]=useState("black")
  return (
    <div  style={{width:"100vw", height:"100vh", backgroundColor:color,display:"flex" ,justifyContent:"center"}}>
      <div id='navbar' className='bg-white rounded-3xl p-2'  style={{position:"fixed", bottom:"5rem", display:"flex" ,alignSelf:"center"}}>
        <button onClick={()=>{setcolor("red")}} className="mr-2 bg-red-600 rounded-3xl">Red</button>
        <button onClick={()=>{setcolor("green")}} className="mr-2 rounded-3xl bg-green-600">Green</button>
        <button onClick={()=>{setcolor("blue")}} className="mr-2 rounded-3xl bg-blue-600">Blue</button>
        <button onClick={()=>{setcolor("olive")}} className="mr-2 rounded-3xl bg-green-900">Olive</button>
        <button onClick={()=>{setcolor("gray")}} className="mr-2 rounded-3xl bg-gray-600">Gray</button>
        <button onClick={()=>{setcolor("yellow")}} className="mr-2 rounded-3xl bg-yellow-300 text-black">Yellow</button>
        <button onClick={()=>{setcolor("pink")}} className="mr-2 rounded-3xl bg-pink-300 text-black">Pink</button>
        <button onClick={()=>{setcolor("purple")}} className="mr-2 rounded-3xl bg-purple-600">Purple</button>
        <button onClick={()=>{setcolor("lavender")}} className="mr-2 rounded-3xl bg-slate-200 text-black">Lavender</button>
        <button onClick={()=>{setcolor("white")}} className="mr-2 rounded-3xl bg-white text-black">White</button>
        <button onClick={()=>{setcolor("black")}} className="mr-2 rounded-3xl bg-black">Black</button>
      </div>
    </div>
  )
}

export default App