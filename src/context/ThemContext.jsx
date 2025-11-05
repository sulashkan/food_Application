/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import React from "react";


 export const ThemeContext = createContext();

 export const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState('dark');

    const toggle = () => {
        setTheme( (prev) =>  prev === 'dark' ?  'light' : 'dark')
    }

    const themeValues = {
        theme,
        toggle
    }

    return (
        <ThemeContext.Provider value = {themeValues}>
            {children}
        </ThemeContext.Provider>
    )
}

// export default ThemeProvider;
// export default ThemeContext;