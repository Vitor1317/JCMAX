import { useState } from "react";
import { InputContainer } from "./styles";

export function Input(){
    const [amount, setAmount] = useState(0);

    return (
        <InputContainer 
            onChange={(e)=> setAmount(e.target.value)} 
            type="number" 
            value={amount}
            min={0}
        />
    )
}