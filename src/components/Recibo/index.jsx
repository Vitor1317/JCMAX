import { NavLink } from "react-router-dom";
import { ReciboContainer } from "./styles";
import { UserSquare, Money } from "phosphor-react";

export function Recibo({recepient, recepientName, amount}){
    return (
        <ReciboContainer>
            <h1>{recepient}</h1>
            <div>
                <UserSquare size={20} />
                <span>{recepientName}</span>
            </div>
            <div>
                <Money size={20} />
                <span>{amount}</span>
            </div>
            <NavLink to="/recibos">
                <span>Vizualizar Recibo</span>
            </NavLink>
        </ReciboContainer>
    )
}