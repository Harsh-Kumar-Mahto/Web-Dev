// Here are making a button that will doggle the theme of a card between light and dark mode
// Most import step is to first add dark mode features in tailwind config file(check in that file)

import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  // Below values and function are already defined in the context so we can directly change there values here also as we imported it and are using it
  const [themeMode,setThemeMode]=useState('light')  

  function lightTheme(){   //directly defining the scope of already defined function in context
    setThemeMode('light')
  }

  function darkTheme(){
    setThemeMode('dark')
  }

  // Actual change in theme

  useEffect(()=>{    //This is to change the actual theme in UI as soon the value of themeMode variable change
    document.querySelector('html').classList.remove('light','dark')  
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>  {/* As there is no themeprovider, we have to take val props here only now all the components inside this can use the data in the context file */}
      <h1 className="bg-cyan-500 text-green-900 font-bold p-4 text-2xl">Theme Switcher</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
