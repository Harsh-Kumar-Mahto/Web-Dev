// Here we are making context and provider in the same file

import  { createContext, useContext } from "react";

// Creating the context and here only we can give the data and functions (in prev project we could have given username and password)
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider   //Making the provider and previously we made jsx provider and sent values in val we now directly have to do it in the App.jsx file

export default function useTheme(){   //Directly making a new hook so we don't have to import useContext and themeContext again and again, we can directly use useTheme
    return useContext(ThemeContext)
}