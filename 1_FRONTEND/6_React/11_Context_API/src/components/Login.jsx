import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)    //we got the set function from context to set the username and password

    function handleSubmit(e){
        e.preventDefault()    //we prevented the default behaviour on onclick as it sent the data via a link which we don't require now
        setUser({username,password})      //set the username and password using set funciton
    }
  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='username' />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
