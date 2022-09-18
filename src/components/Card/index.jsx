import { CardContainer } from "./styles";

export function Card({children, flexWidth = 1}){
    return (
        <CardContainer flexWidth={flexWidth}>
            {children}
        </CardContainer>
    )
}