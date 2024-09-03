import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'


function App() {
  
  const [themeMode,setThemeMode]=useState('light')

  const darkTheme=()=>{
    setThemeMode('dark')
  }

  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    let color
    if(themeMode=='light')color='white'
    else color='black'
    document.body.style.backgroundColor=color   //is sir video we are directly using the dark mode features of tailwind and that's why one setting is added and we just need no set theme according to mode
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <h1 className="text-3xl font-bold underline">
        <button onClick={darkTheme} className='m-4 p-4 bg-red-500'>Black</button><br />
        <button onClick={lightTheme} className='m-4 p-4 bg-red-500'>Light</button>
      </h1>
    </ThemeProvider>
  )
}

export default App
