import {
LinksContainer, 
LogoContainer, 
Separator, 
SidebarContainer, 
IconToggle
} from "./styles";

import logo from "../../assets/logo.png";

import { 
ChartLineUp,
HouseLine,
CurrencyDollar,
ProjectorScreenChart,
Receipt,
ChartPieSlice,
Newspaper,
UsersThree,
List
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const arrayLinks = [
    {
        id: 1,
        to: "/",
        text: "Home",
        icon: <HouseLine size={20} />
    },
    {
        id: 2,
        to: "/producao",
        text: "Produção",
        icon:  <ChartLineUp size={20} />
    },
    {
        id: 3,
        to: "/comissao",
        text: "Comissões",
        icon: <CurrencyDollar size={20} />
    },
    {
        id: 4,
        to: "/pontos",
        text: "Tabela de Pontos",
        icon: <ProjectorScreenChart size={20} />
    },
    {
        id: 5,
        to: "/recibos",
        text: "Recibos",
        icon: <Receipt size={20} />
    },
    {
        id: 6,
        to: "/ganhos",
        text: "Ganhos",
        icon: <ChartPieSlice size={20} />
    },
    {
        id: 7,
        to: "/arquivos",
        text: "Arquivos",
        icon: <Newspaper size={20} />
    },
    {
        id: 8,
        to: "/equipe",
        text: "equipe",
        icon: <UsersThree size={20} />
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
        </SidebarContainer>
    )
}