import {Table} from "../../components/Table";
import { Card } from "../../components/Card"
import { Search } from "../../components/Search"
import { Container, FlexRow, Separator} from "./styles"
import { Input } from "../../components/inputs";

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
        content: (<Input />)
    },
    {
        dia: "02/09/2022",
        content: (<Input />)
    },
    {
        dia: "03/09/2022",
        content: (<Input />)
    },
    {
        dia: "04/09/2022",
        content: (<Input />)
    },
    {
        dia: "05/09/2022",
        content: (<Input />)
    },
    {
        dia: "06/09/2022",
        content: (<Input />)
    },
    {
        dia: "07/09/2022",
        content: (<Input />)
    },
    {
        dia: "08/09/2022",
        content: (<Input />)
    },
    {
        dia: "09/09/2022",
        content: (<Input />)
    },
    {
        dia: "10/09/2022",
        content: (<Input />)
    },
    {
        dia: "11/09/2022",
        content: (<Input />)
    },
    {
        dia: "12/09/2022",
        content: (<Input />)
    },
    {
        dia: "13/09/2022",
        content: (<Input />)
    },
    {
        dia: "14/09/2022",
        content: (<Input />)
    },
    {
        dia: "15/09/2022",
        content: (<Input />)
    },
    {
        dia: "16/09/2022",
        content: (<Input />)
    },
    {
        dia: "17/09/2022",
        content: (<Input />)
    },
    {
        dia: "18/09/2022",
        content: (<Input />)
    },
    {
        dia: "19/09/2022",
        content: (<Input />)
    },
    {
        dia: "20/09/2022",
        content: (<Input />)
    },
    {
        dia: "21/09/2022",
        content: (<Input />)
    },
    {
        dia: "22/09/2022",
        content: (<Input />)
    },
    {
        dia: "23/09/2022",
        content: (<Input />)
    },
    {
        dia: "24/09/2022",
        content: (<Input />)
    },
    {
        dia: "25/09/2022",
        content: (<Input />)
    },
    {
        dia: "26/09/2022",
        content: (<Input />)
    },
    {
        dia: "27/09/2022",
        content: (<Input />)
    },
    {
        dia: "28/09/2022",
        content: (<Input />)
    },
    {
        dia: "29/09/2022",
        content: (<Input />)
    },
    {
        dia: "30/09/2022",
        content: (<Input />)
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
            <h1>Produção</h1>
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