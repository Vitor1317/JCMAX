import { HeaderContainer, Profile, ModalContent, Separator } from "./styles";
import { DotsThreeVertical, PencilLine, Key, SignOut} from "phosphor-react";
import { Dropdown } from "../Dropdown";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Logotipo" />
            </NavLink>
            <Dropdown 
                title={<Profile>
                    <img src="https://centralferola.com.br/storage/profiles_pictures/bruno-pontes-dos-santos-161972692864.jpeg" alt="" />
                    <div className="flex">
                        <strong>Bruno Pontes</strong>
                        <small>brunopontes@hotmail.com</small>
                    </div>
                    <DotsThreeVertical size={28} />
                </Profile>}
            >
                <ModalContent>
                    <strong>Configurações</strong>
                    <Separator />
                    <NavLink to="/">
                        <PencilLine size={20} />
                        <span>Editar Informações pessoais</span>
                    </NavLink>
                    <Separator />
                    <NavLink to="/">
                        <Key size={20} />
                        <span>Editar Senha</span>
                    </NavLink>
                    <Separator />
                    <NavLink to="/login">
                        <SignOut size={20} />
                        <span>Sair</span>
                    </NavLink>
                </ModalContent>
            </Dropdown>
        </HeaderContainer>
    )
}