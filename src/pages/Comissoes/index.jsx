import {Card} from "../../components/Card";
import { Table } from "../../components/Table";
import { Separator } from "../Home/styles";
import { Container } from "./styles";

import { FilePdf } from "phosphor-react";

const contentHead = [
    "ID", "Proprietário", "End. do Imóvel", "Data" ,"Cpf", "Valor", "Arquivo"
]

const contentBody = [
    {
        id: 1,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 2,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 3,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 4,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 5,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 6,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    },
    {
        id: 7,
        proprietario: "Ricardo Alves",
        endereco: "Planaltina vila buritis",
        cpf: "123123123-34",
        data: "17/04/22",
        valor: 500.00,
        arquivo: <FilePdf size={20} color="red" style={{cursor: "pointer"}} />
    }
]

const renderBody = (item, i)=>{
    return(
        <tr key={i}>
            <td>{item.id}</td>
            <td>{item.proprietario}</td>
            <td>{item.endereco}</td>
            <td>{item.cpf}</td>
            <td>{item.data}</td>
            <td>{item.valor}</td>
            <td>{item.arquivo}</td>
        </tr>
    )
}

export function Comissoes(){
    return (
        <Container>
            <h1>Comissões</h1>
            <Card>
                <Separator />
                <Table renderBody={renderBody} contentBody={contentBody} contentHead={contentHead} />
            </Card>
        </Container>
    )
}