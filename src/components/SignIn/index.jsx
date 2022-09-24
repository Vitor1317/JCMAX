import { LoginCard } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export function SignIn(){
    return (
        <LoginCard>
                <div className="top">
                    <h2>Bem Vindo!</h2>
                    <img src={logo} alt="Logotipo" />
                </div>
                <div className="login">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha" />
                    <NavLink to="/">
                        <button>
                            Entrar
                        </button>
                    </NavLink>
                </div>
                <div className="footer">
                    <small>Não possui conta? 
                        <NavLink to="/login/cadastrar">
                            Click Aqui
                        </NavLink>  
                    </small>
                </div>
            </LoginCard>
    )
}