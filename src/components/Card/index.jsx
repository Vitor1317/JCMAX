import { CardContainer } from "./styles";

export function Card({children, flexWidth = 1, bg, direction, fontColor}){
    return (
        <CardContainer font={fontColor} direction={direction} flexWidth={flexWidth} bg={bg}>
            {children}
        </CardContainer>
    )
}