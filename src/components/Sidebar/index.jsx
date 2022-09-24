import {
LinksContainer, 
LogoContainer, 
Separator, 
SidebarContainer, 
IconToggle, 
Profile, 
ModalContent 
} from "./styles";

import logo from "../../assets/logo.png";

import { Dropdown } from "../Dropdown";

import { 
ChartLineUp,
HouseLine,
CurrencyDollar,
ProjectorScreenChart,
Receipt,
ChartPieSlice,
UsersThree,
List,
DotsThreeVertical, 
PencilLine, 
Key, 
SignOut
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const arrayLinks = [
    {
        id: 1,
        to: "/",
        text: "Home",
        icon: <HouseLine size={18} />
    },
    {
        id: 2,
        to: "/producao",
        text: "Produção",
        icon:  <ChartLineUp size={18} />
    },
    {
        id: 3,
        to: "/comissao",
        text: "Comissões",
        icon: <CurrencyDollar size={18} />
    },
    {
        id: 4,
        to: "/pontos",
        text: "Tabela de Pontos",
        icon: <ProjectorScreenChart size={18} />
    },
    {
        id: 5,
        to: "/recibos",
        text: "Recibos",
        icon: <Receipt size={18} />
    },
    {
        id: 6,
        to: "/ganhos",
        text: "Ganhos",
        icon: <ChartPieSlice size={18} />
    },
    {
        id: 8,
        to: "/equipe",
        text: "equipe",
        icon: <UsersThree size={18} />
    }
]

export function Sidebar(){
    const [open, setOpen] = useState(true);

    return (
        <SidebarContainer activeSidebar={open}>
           <LogoContainer>
            {open && <img src={logo} alt="Logotipo" />}
            <IconToggle activeSidebar={open} onClick={()=> setOpen((state)=> !state)}>
                <List size={28} />
            </IconToggle>
           </LogoContainer>
           <Separator />
           <LinksContainer>
            {
                arrayLinks.map((item)=>(
                    <NavLink key={item.id} to={item.to}>
                        {item.icon}
                        {
                            open && (
                                <span>{item.text}</span>
                            )
                        }
                    </NavLink>
                ))
            }
           </LinksContainer>
           <div>
            <Dropdown 
                    title={<Profile>
                        <img src="https://centralferola.com.br/storage/profiles_pictures/bruno-pontes-dos-santos-161972692864.jpeg" alt="" />
                        {open && (
                            <>
                            <div className="flex">
                                <strong>Bruno Pontes</strong>
                                <small>(Administrador)</small>
                            </div>
                            <DotsThreeVertical size={28} />
                            </>
                        )}
                    </Profile>}
                >
                {open && (
                    <ModalContent>
                    <strong>Configurações</strong>
                    <Separator />
                    <NavLink to="/alterarDados">
                        <PencilLine size={23} />
                        <span>Editar Informações pessoais</span>
                    </NavLink>
                    <Separator />
                    <NavLink to="/alterarSenha">
                        <Key size={20} />
                        <span>Editar Senha</span>
                    </NavLink>
                    <Separator />
                    <NavLink to="/login">
                        <SignOut size={20} />
                        <span>Sair</span>
                    </NavLink>
                </ModalContent>
                )}
            </Dropdown>
           </div>
        </SidebarContainer>
    )
}