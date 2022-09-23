import { CardContainer } from "./styles";

export function Card({children, flexWidth = 1, bg, direction }){
    return (
        <CardContainer direction={direction} flexWidth={flexWidth} bg={bg}>
            {children}
        </CardContainer>
    )
}