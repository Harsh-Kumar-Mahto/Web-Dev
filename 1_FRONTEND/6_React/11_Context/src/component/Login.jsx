// This is a component where we want to acces user data as we will set the value of the data
// For this we have to user hook useContext and in its parameter we will give the name of the context of which data is to be accessed
// We don't use provider, we use the context itself

import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')  //these are the value that will be set in user
    const [password,setPassword]=useState('')

    const{setUser}= useContext(UserContext)   //accessing the user data in the UserContext, we only require the setUser function from that context so just getting it

    function handleSubmit(e){   //once submit button is clicked, we will update the values in the actual user
        e.preventDefault()     //this is to prevent the default behaviour of submit button which is send the data using some url
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />   {/* value is governed by variable and as the data in field change, we update the value in variables */}
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
