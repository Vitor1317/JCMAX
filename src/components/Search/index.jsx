import { InputContainer } from "./styles";
import { Share } from "phosphor-react";

export function Search({options, button = false, title, label}){
    return (
        <InputContainer>
            <div>
                <h3>{title}</h3>
                <select name="" id="">
                { options.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                ))}
                </select>
            </div>
            {!button && (
                <button href="#">
                    {label}
                    <Share size={20} />
                </button>
            ) }
        </InputContainer>
    )
}