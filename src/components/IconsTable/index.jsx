import {Container} from "./styles";
import { FilePdf, Pencil } from "phosphor-react";

export function IconsTable(){
    return (
        <Container>
            <FilePdf size={24} color="red"/>
            <Pencil size={24} color="teal"/>
        </Container>
    )
}