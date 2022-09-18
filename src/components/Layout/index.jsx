import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { LayoutContainer, MainContainer } from "./styles";

export function Layout(){
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContainer>
               <div>
                <Header />
                <Outlet />
               </div>
            </MainContainer>
        </LayoutContainer>
    )
}