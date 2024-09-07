import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")


  // useCallback is a hook used to run a particular code again and again without refreshing the whole page whenever any of the dependencies change. Saves the function in cache so that it is easy to run a particular code section
  const passGenerator=useCallback(()=>{
    let password=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(char) str+="!@#$%^&*-_+=[]{}~`"
    if(num) str+="1234567890"
    for (let i = 0; i < len; i++) {
      let c=str[Math.floor(Math.random()*str.length+1)]
      password+=c
    }
    setPass(password)
  },[len,char,num])
  
  // useEffect is also similar to useCallback but in this the function is executed as soon as the website is loaded
  // useEffect is to run the function as the dependencies change and useCallback is resposible for memoization and optimization by putting values in the cache
  // This project can be made without using useCallback as it is basically for optimization, we will just need to write the definition of the function in place of the function call below

  useEffect(() => {
    passGenerator()
  }, [length, num, char, passGenerator])

  // useRef is a hook which is used to pass a reference, we need to store the ref inside a variable
  const passRef = useRef()

  const copyToClip=()=>{
    passRef.current?.select()   //this will highlight the selected text
    // passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(pass)  //Actual copying to clipboard is done with using reference, but for feel to user we will use reference
  }

  return (
    <>
      <h1 className='bg-yellow-500 p-4 rounded-3xl m-10 font-serif font-bold'>Password Generator</h1>
      <div className='bg-gray-700 h-32 rounded-2xl'>
        <div className='p-4'>
          <input type="text" readOnly placeholder='Password' value={pass} className='bg-white pl-2 text-black inline rounded-l-xl h-9 mr-0 w-3/4' ref={passRef}/>{/* Here we are passing the reference */}
          <button onClick={copyToClip} className='bg-blue-700 h-9 w-1/6 mr-3 text-center p-1 rounded-l-none'>Copy</button>
        </div>
        <div className='flex justify-evenly'>
          <div>
            <input type="range" onChange={(e)=>{setLen(e.target.value)}} name="length" id="length" defaultValue={8} max={20}  />  
            <label htmlFor="length" className='ml-1'>Length ({len})</label>
          </div>
          <div>
            <input type="checkbox" onChange={()=>{setNum((num)=>!num)}} name="nums" id="nums" />
            <label htmlFor="nums" className='ml-1'>Numbers</label>
          </div>
          <div>
            <input type="checkbox" onChange={()=>{setChar((char)=>!char)}} name="chars" id="chars" />
            <label htmlFor="chars" className='ml-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
