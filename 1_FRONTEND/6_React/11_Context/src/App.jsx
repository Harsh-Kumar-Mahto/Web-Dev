import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

// In this we are making a context which will save the data that can accessed by others and we don't have to pass the data as parameters as we did earlier and only those who require will need to save the data, before each parent of the component having this data had to pass the data as parameter
// First step is to create a context which is a pure javascript here we are making a user and the data of user needs to be passed


function App() {

  return (
    <UserContextProvider>   {/* This provider is must and it provide the access to data to all the components inside it and we have already handled the data as per our requirement inside the component */}
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
