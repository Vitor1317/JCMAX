import { LoginContent, Wrapper } from "./styles";
import logo from "../../assets/logo.png";
import { SignIn } from "../../components/SignIn";
import { Outlet } from "react-router-dom";

export function Login(){
    return (
        <Wrapper>
            <LoginContent>
                <img src={logo} alt="Logotipo" />
                <h1>Bem vindo a JCMAX</h1>
            </LoginContent>
            <Outlet />
        </Wrapper>
    )
}