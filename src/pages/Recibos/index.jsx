import { Card } from "../../components/Card";
import { Search } from "../../components/Search";
import { Container, Separator, RecibosContainer } from "./styles";
import { Recibo } from "../../components/Recibo";

const options = [
    "Venda1",
    "Venda2",
    "Venda3",
    "Venda4",
    "Venda5",
    "Venda6",
    "Venda7",
]

export function Recibos(){
    return (
        <Container>
            <h1>Recibos</h1>
            <Card>
                <Search
                    options={options}
                    label="Gerar recibos"
                />

                <Separator />

                <RecibosContainer>
                    <Recibo recepient="Corretora" recepientName="JC max" amount={70000} />
                    <Recibo recepient="Corretor" recepientName="Gustavo" amount={700} />
                    <Recibo recepient="Supervisor" recepientName="Breno" amount={7000} />
                </RecibosContainer>
            </Card>
        </Container>
    )
}