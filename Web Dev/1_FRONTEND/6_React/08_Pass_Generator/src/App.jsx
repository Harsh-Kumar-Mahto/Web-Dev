import {useEffect, useCallback, useState, useRef } from "react"
import './App.css'

function App() { 
  // these are all the states that change and play crucial role in password generation
  const [length,setLength]=useState(8)
  const [boolnum,setNum]=useState(false)
  const [boolsymbol,setSymbol]=useState(false)
  const [password,setPassword]=useState("")
  const [color,setColor]=useState("blue")
  const [change,setChange]=useState("green")

  // this is the function which is used to generate the password & the use callback hook will optimize by putting all the dependecies in cache
  const passGenerator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"    //initail set of characters with which pass will be generated
    let pass=""
    if(boolnum)str+="1234567890"       //if numbers are allowed than add the numbers in the allowed str
    if(boolsymbol)str+="!@#$%^&_[]{}"  //if symbols are allowed than add these
    for(let i=1;i<=length;i++)         //this loop will generate a password of required length
      {
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }
      setPassword(pass)                //after successful generation we have to set it as password
    },[length,boolnum,boolsymbol,setPassword])    //these are the dependencies which will be placed in the cache
    
    //this hook is used to perform some task based on the dependencies and also at the starting
    useEffect(() => {
      passGenerator()
    }, [length,boolnum,boolsymbol,passGenerator])   //these are the dependencies, when they change the function writted or the reference which is given is executed  
    
    // Making reference of password in order to copy it using UseRef hook
    const passwordRef=useRef(null)          

    // this function is responsible for copying the password to clipboard
    function copyPass(){
      window.navigator.clipboard.writeText(password)  //copying is done by this but for copy effect we will use the reference
      passwordRef.current?.select()   // ? is used for selective checking for value null
      // passwordRef.current?.setSelectionRange(0,3)   this method is used for selecting particular portion
    }

  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>Password Generator Project</h1>
      <div style={{backgroundColor:"grey",height:"10rem",width:"30rem",margin:"2rem",borderRadius:"0.8rem"}}>
        <input ref={passwordRef} placeholder="Password" type="text" id="text" value={password} style={{margin:"1rem",marginTop:"2rem",marginRight:"0.6rem",height:"2rem",width:"23rem",backgroundColor:"white",borderRadius:"0.5rem", paddingLeft:"1rem",color:"black"}} />
        <button onMouseLeave={()=>{setColor("blue")}} onMouseEnter={()=>{setColor("darkblue")}} onClick={copyPass} style={{borderRadius:"0.5rem",height:"2rem",position:"fixed",marginTop:"2rem",padding:"0rem 1rem 0rem 1rem",backgroundColor:color}}>Copy</button>        
        <div className="pl-5">
          <input onChange={(e)=>setLength(e.target.value)} type="range" id="length" min={8} max={35}  defaultValue={8} />
          <label className="ml-1" htmlFor="length">Length({length})</label>
          <input onChange={()=>{setNum((prev)=>!prev)}} className="ml-4" type="checkbox" id="Numbers" />
          <label className="ml-1" htmlFor="Numbers">Numbers</label>
          <input onChange={()=>{setSymbol((prev)=>!prev)}} className="ml-4" type="checkbox" id="Symbols" />
          <label className="ml-1" htmlFor="Symbols">Symbols</label>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"0.7rem"}}>
          <button onClick={passGenerator} onMouseLeave={()=>{setChange("green")}} onMouseEnter={()=>{setChange("darkgreen")}} style={{padding:"0.5rem",backgroundColor:change}}>Change</button>
        </div>
      </div>
    </div>
  )
}

export default App
