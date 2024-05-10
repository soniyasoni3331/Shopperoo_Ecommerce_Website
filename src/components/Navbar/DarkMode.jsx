import React, { useState } from 'react'
import lightPng from '../../assets/website/light-theme.png'
import darkPng from '../../assets/website/dark-theme.png'

function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light");
    
    const element = document.documentElement; //html element 

    React.useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme]);

  return (
    <div className='relative'>
        <img src={lightPng} alt="" 
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-sm rounded-3xl transition-all duration-200 absolute right-0 z-10 ${ theme === "dark" ? "opacity-0" : "opacity-100"}`}/>

    <img src={darkPng} alt="" 
    onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 cursor-pointer drop-shadow-sm rounded-3xl transition-all duration-200'/>
    </div>
  )
}

export default DarkMode