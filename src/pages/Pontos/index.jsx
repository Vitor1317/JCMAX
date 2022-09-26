import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import {Progressbar} from "../../components/Progressbar";
import {Table} from "../../components/Table";
import { Container, FlexRow, Separator } from "./styles";

const trimestreOptions = [
    "1° trimestre",
    "2° trimestre",
    "3° trimestre",
    "4° trimestre"
]

const optionsYear = [
    "2022", "2021","2020"
]

const contentHead = [
    "Mês", "Imóveis Captados (200pts)", "Exclusividades (200pts)", "Anúncios Publicados(200pts)", "Placas(200pts)", "Vendas (200pts)", "Total de Pontos" 
]

const contentBody = [
    {
        mes: "Janeiro",
        pontos: "300",
        total: "12300"
    },
    {
        mes: "Fevereiro",
        pontos: "431",
        total: "1230043"
    },
    {
        mes: "Março",
        pontos: "3465",
        total: "1230230"
    },
    {
        mes: <h4>Total do trimestre:</h4>,
        pontos: "",
        total: "40000"
    }
]

const renderBody = (item, i) =>{
    return (
        <tr key={i}>
            <td>{item.mes}</td>
            <td>{item.pontos}</td>
            <td>{item.pontos}</td>
            <td>{item.pontos}</td>
            <td>{item.pontos}</td>
            <td>{item.pontos}</td>
            <td style={{fontWeight: 600}}>{item.total}</td>
        </tr>
    )
}

export function Pontos(){
    return (
        <Container>
            <h1>Pontos</h1>
            <Card>
                <FlexRow>
                    <Search options={trimestreOptions} button title="Escolha o Trimestre" />
                    <Search title="Selecione o ano: " options={optionsYear}/>
                </FlexRow>

                <Separator />

                <Progressbar />

                <Separator />

                <h1>1° Trimestre</h1>

                <Separator />

                <Table
                    contentHead={contentHead}
                    contentBody={contentBody}
                    renderBody={renderBody}
                />
                

            </Card>
        </Container>
    )
}