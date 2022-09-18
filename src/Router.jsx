import {Routes, Route} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Ganhos } from "./pages/Ganhos";
import { Comissoes } from "./pages/Comissoes";
import { Home } from "./pages/Home";
import { Arquivos } from "./pages/Arquivos";
import { Pontos } from "./pages/Pontos";
import { Producao } from "./pages/Producao";
import { Equipe } from "./pages/Equipe";
import { Recibos } from "./pages/Recibos";
import { Login } from "./pages/Login";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home/>} />
                <Route path="/arquivos" element={<Arquivos />} />
                <Route path="/comissao" element={<Comissoes />} />
                <Route path="/ganhos" element={<Ganhos />} />
                <Route path="/recibos" element={<Recibos />} />
                <Route path="/pontos" element={<Pontos />} />
                <Route path="/producao" element={<Producao />} />
                <Route path="/equipe" element={<Equipe />} />
            </Route>
            <Route path="/login" element={<Login />}/>
        </Routes> 
    )
}