import { LoginCard, LoginContent, Wrapper } from "./styles";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Login(){
    return (
        <Wrapper>
            <LoginContent>
                <img src={logo} alt="Logotipo" />
                <h1>Bem vindo a JCMAX</h1>
                <p>Para entra em contato ligue para nós</p>
                <h3>(61)99999-9999</h3>
                <h3>(61)3333-3333</h3>
            </LoginContent>
            <LoginCard>
                <div className="top">
                    <h2>Bem Vindo!</h2>
                    <img src={logo} alt="Logotipo" />
                </div>
                <div className="login">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                </div>
                <div className="footer">
                    <small>Não possui conta? 
                        <NavLink to="/">
                            Click Aqui
                        </NavLink>  
                    </small>
                </div>
            </LoginCard>
        </Wrapper>
    )
}