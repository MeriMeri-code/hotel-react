import { createContext,useState,useEffect } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
const[isDark,setIsDark] = useState(localStorage.getItem("theme") === "dark");
const toggleTheme = () => {
    setIsDark(!isDark);
};
useEffect(()=>{
    if(isDark){
    document.documentElement.classList.add("dark");
    }else{
    document.documentElement.classList.remove("dark");
    }
     localStorage.setItem("theme", isDark ? "dark" : "light");
    },[isDark]);
    

return(
< ThemeContext.Provider value={{isDark,toggleTheme}}>{children}</ThemeContext.Provider>
);
}
export{ThemeContext,ThemeProvider};