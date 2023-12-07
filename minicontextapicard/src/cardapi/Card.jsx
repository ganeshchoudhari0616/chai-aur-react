import { useState ,useEffect} from "react";
import { ThemeProvider } from "../cardcontext/theme"
import ThemeBtn from "../cardcomponents/ThemeBtn";
import Cardd from "../cardcomponents/Cardd";


const Card = () => {
    const[themeMode,setThemeMode]=useState('ilght');

    const lightTheme=()=>{
        setThemeMode('light')
    }
    const darkTheme=()=>{
        setThemeMode('dark')
    }
    //acutally change in theme

    useEffect(() => {
      document.querySelector('html').classList.remove('light','dark');
      document.querySelector('html').classList.add(themeMode);
    }, [themeMode])
    
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex just mb-4">
                <ThemeBtn/>
                </div>
                <div className="w-full max-w-sm mx-auto">
                   <Cardd/>
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default Card;