
import{ darkStatesBar,lightStatesBar,DarkTheme,lightTheme} from '../utils/color';
import { createContext, useContext, useState } from "react";
const ColorContext = createContext();
 export const ColorProvider = ({ children }) => {
      const[ isDark,setIsDark]=useState(true)
      const color=isDark? DarkTheme :lightTheme;
      const statusbar=isDark?lightStatesBar:darkStatesBar;
       const toggleteam= ()=> setIsDark((prev)=> !prev)
      const value={color,statusbar,toggleteam,isDark};
 
  return(
     <ColorContext.Provider
      value={value}
    >

      {children}

    </ColorContext.Provider>
  )  }
  export const usecolor=()=>{
 const  context=useContext(ColorContext)
 if(!context)
 throw new Error("use color must be used in the correct value");
    return context;
  };








