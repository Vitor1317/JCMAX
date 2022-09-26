import { useState } from "react"
import { Wrapper } from "./styles"

export function InputLable({title, valor}){
    const [value, setValue] = useState(valor);

    return (
        <Wrapper>
            <h3>{title}</h3>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
        </Wrapper>
    )
}