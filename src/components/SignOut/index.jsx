import { LoginCard } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Signout(){
    return (
        <LoginCard>
                <div className="top">
                    <h2>Bem Vindo!</h2>
                    <img src={logo} alt="Logotipo" />
                </div>
                <div className="login">
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="senha" />
                    <input type="password" placeholder="repita a senha" />
                    <NavLink to="/login">
                        <button>
                            Cadastrar
                        </button>
                    </NavLink>
                </div>
                <div className="footer">
                </div>
            </LoginCard>
    )
}