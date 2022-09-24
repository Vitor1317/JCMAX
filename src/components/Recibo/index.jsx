import { NavLink } from "react-router-dom";
import { ReciboContainer } from "./styles";
import { UserSquare, Money } from "phosphor-react";
import {ArrowCircleRight} from "phosphor-react";

export function Recibo({recepient, recepientName, amount, background}){
    return (
        <ReciboContainer background={background} >
            <h1>{recepient}</h1>
            <div>
                <UserSquare size={20} />
                <span>{recepientName}</span>
            </div>
            <div>
                <Money size={20} />
                <span>{amount}</span>
            </div>
            <div className="link">
                <NavLink to="/recibos">
                    <span>Vizualizar Recibo</span>
                    <ArrowCircleRight size={24} />
                </NavLink>
            </div>
        </ReciboContainer>
    )
}