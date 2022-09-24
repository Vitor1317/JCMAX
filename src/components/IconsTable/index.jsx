import {Container} from "./styles";
import { FilePdf, Pencil } from "phosphor-react";

export function IconsTable(){
    return (
        <Container>
            <div title="Ver PDF">
                <FilePdf size={24} color="red"/>
            </div>
            <div title="Editar">
                <Pencil size={24} color="teal"/>
            </div>
        </Container>
    )
}