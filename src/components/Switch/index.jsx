import { Container } from "./styles";
import { ThemeContext } from "../../App";
import { useContext } from "react";


export function Switch(){
    const {theme, setTheme} = useContext(ThemeContext);
    function alterar(){
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <Container>
            <input type="checkbox" checked={theme === "dark"} onChange={alterar}/>
            <span/>
        </Container>
    )
}