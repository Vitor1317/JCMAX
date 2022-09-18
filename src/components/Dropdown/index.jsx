import { DropdownContainer, Title, Content, Overlay } from "./styles";
import { useState } from "react";

export function Dropdown({title, children}){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContainer isOpen={isOpen}>
            <Title onClick={()=> setIsOpen(!isOpen)}>{title}</Title>

            <Content aria-hidden={!isOpen}>{children}</Content>
            <Overlay onClick={()=> setIsOpen(!isOpen)} />
        </DropdownContainer>
    )
}