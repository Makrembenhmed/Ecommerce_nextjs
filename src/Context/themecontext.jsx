"use client" 
// create context : hook from react

import { createContext, useEffect, useState } from "react"

export const  Themecontext=createContext()

export const ThemeProvider=({children})=>{

    const [mode,setMode]=useState(localStorage.getItem("togg") || 'dark')

    useEffect(() => {
        const tog = localStorage.getItem("togg");
        
        if (tog) {
            setMode(tog);
        
        }
    }, []);
    
    
    const toggle = ()=>{ 
        const newMode= mode === "dark" ? "light" : "dark";
        setMode(newMode)
        localStorage.setItem("togg",newMode)
    }
    
    return(
    <Themecontext.Provider value={{toggle,mode}}>
        <div className={`theme ${mode}`}>
        {children}
        </div>
    </Themecontext.Provider>
    
    )
    
}
