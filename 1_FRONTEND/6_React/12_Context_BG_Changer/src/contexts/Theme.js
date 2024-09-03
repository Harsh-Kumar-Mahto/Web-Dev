// This time we are going to make the context and the context provider at once

import { createContext,useContext } from "react";

export const ThemeContext=createContext({       //This is the context created as well as exported
    themeMode:'light',        //These are the values and functions to be passed in in context
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider     //We are also exporting the context provider here only

// Now we are making a custom hook so that we can directly access the value using the hooks
// Sir used this hook as he made components so he required to access values in components as color inside them is changing but I directly changed just bg color se didn't require this hook
// There also occured a problem at end due to tailwind as we need to enable dark mode based on classes which sir explained at 1:09:00 approx in context API crash course video 
export default function useTheme(){
    return useContext(ThemeContext)    //Here we are directly returning the context and now everything is sorted 
}