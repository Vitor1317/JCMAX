import { HeaderContainer} from "./styles";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import {SignOut} from "phosphor-react";
import { Switch } from "../Switch";

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Logotipo" />
            </NavLink>
            <div>
                <div className="toggle">
                    <span>Modo Escuro?</span>
                    <Switch />
                </div>
                <NavLink to="/login">
                    <SignOut size={20} />
                    <span>Sair</span>
                </NavLink>
            </div>
        </HeaderContainer>
    )
}