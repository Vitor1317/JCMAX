import {Table} from "../../components/Table";
import { Card } from "../../components/Card"
import { Search } from "../../components/Search"
import { Container, FlexRow, Separator} from "./styles"

const optionsMouth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novemvro",
    "Dezembro"
]

const optionsYear = [
    "2022", "2021","2020"
]

const contentHead = [
    "Dia", "Imovéis Captados", "Exclusividades Capitadas", "Anuncios Publicados", "Placas", "Propostas"
]

const contentBody = [
    {
        dia: "01/09/2022",
        content: 0
    },
    {
        dia: "02/09/2022",
        content: 0
    },
    {
        dia: "03/09/2022",
        content: 0
    },
    {
        dia: "04/09/2022",
        content: 0
    },
    {
        dia: "05/09/2022",
        content: 0
    },
    {
        dia: "06/09/2022",
        content: 0
    },
    {
        dia: "07/09/2022",
        content: 0
    },
    {
        dia: "08/09/2022",
        content: 0
    },
    {
        dia: "09/09/2022",
        content: 0
    },
    {
        dia: "10/09/2022",
        content: 0
    },
    {
        dia: "11/09/2022",
        content: 0
    },
    {
        dia: "12/09/2022",
        content: 0
    },
    {
        dia: "13/09/2022",
        content: 0
    },
    {
        dia: "14/09/2022",
        content: 0
    },
    {
        dia: "15/09/2022",
        content: 0
    },
    {
        dia: "16/09/2022",
        content: 0
    },
    {
        dia: "17/09/2022",
        content: 0
    },
    {
        dia: "18/09/2022",
        content: 0
    },
    {
        dia: "19/09/2022",
        content: 0
    },
    {
        dia: "20/09/2022",
        content: 0
    },
    {
        dia: "21/09/2022",
        content: 0
    },
    {
        dia: "22/09/2022",
        content: 0
    },
    {
        dia: "23/09/2022",
        content: 0
    },
    {
        dia: "24/09/2022",
        content: 0
    },
    {
        dia: "25/09/2022",
        content: 0
    },
    {
        dia: "26/09/2022",
        content: 0
    },
    {
        dia: "27/09/2022",
        content: 0
    },
    {
        dia: "28/09/2022",
        content: 0
    },
    {
        dia: "29/09/2022",
        content: 0
    },
    {
        dia: "30/09/2022",
        content: 0
    }
]

const renderBody = (item, i)=>{
    return (
        <tr key={i}>
            <td>{item.dia}</td>
            <td>{item.content}</td>
            <td>{item.content}</td>
            <td>{item.content}</td>
            <td>{item.content}</td>
            <td>{item.content}</td>
        </tr>
    )
}

export function Producao(){
    return (
        <Container>
            <h1>Producao</h1>
            <Card>
                <FlexRow>
                    <Search title="Selecione o mês: " options={optionsMouth} button/>
                    <Search title="Selecione o ano: " options={optionsYear}/>
                </FlexRow>
                <Separator /> 
        
                <Table renderBody={renderBody} contentBody={contentBody} contentHead={contentHead} />
            </Card>
        </Container>
    )
}