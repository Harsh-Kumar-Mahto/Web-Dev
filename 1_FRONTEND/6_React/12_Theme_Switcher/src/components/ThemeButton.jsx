// Applying function on the button as tailwind provide default mode switching and will adjust colours automatically

import React from 'react'
import useTheme from '../context/ThemeContext';

export default function ThemeBtn() {
    
    const {themeMode,lightTheme,darkTheme} = useTheme()   //using data from context

    function onChangeBtn(e){    //generating event as the button status is changed
        const darkStatus= e.currentTarget.checked   //current status of the button(below we have defined that if button is on means dark mode)
        if(darkStatus){       //if dark mode enabled, call the function to enable dark theme, else below
            darkTheme() 
        }
        else{
            lightTheme()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""  //not necessary to define this as we are not using absolute value, but we need it when there is length or something else
                className="sr-only peer"
                onChange={onChangeBtn}   //calling function on change
                checked={themeMode==='dark'}   //defining that if button is checked means dark else light mode
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}