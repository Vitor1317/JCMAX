import {Routes, Route} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Ganhos } from "./pages/Ganhos";
import { Comissoes } from "./pages/Comissoes";
import { Home } from "./pages/Home";
import { Pontos } from "./pages/Pontos";
import { Producao } from "./pages/Producao";
import { Equipe } from "./pages/Equipe";
import { Recibos } from "./pages/Recibos";
import { Login } from "./pages/Login";
import { SignIn } from "./components/SignIn";
import { Signout } from "./components/SignOut";
import { AlterarDados } from "./pages/AlerarDados";
import { AlterarSenha } from "./pages/AlterarSenha";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home/>} />
                <Route path="/comissao" element={<Comissoes />} />
                <Route path="/ganhos" element={<Ganhos />} />
                <Route path="/recibos" element={<Recibos />} />
                <Route path="/pontos" element={<Pontos />} />
                <Route path="/producao" element={<Producao />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/alterarDados" element={<AlterarDados />} />
                <Route path="/alterarSenha" element={<AlterarSenha />} />
            </Route>
            <Route path="/login" element={<Login />}>
                <Route path="/login" element={<SignIn />} />
                <Route path="/login/cadastrar" element={<Signout />} />
            </Route>
        </Routes> 
    )
}