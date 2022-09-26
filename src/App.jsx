import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

export const ThemeContext = createContext(null);

function chooseTheme(theme){
    if(theme === "light"){
      return lightTheme;
    }

    if(theme === "dark"){
      return darkTheme;
    }
}

export function App() {
  const [theme, setTheme] = useState("light");

  const themeStyle = chooseTheme(theme);

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
      
  )
}
