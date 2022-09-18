import { HomeContainer, Separator, FlexRow} from "./styles";
import { Card } from "../../components/Card";
import { Progressbar } from "../../components/Progressbar";

export function Home(){
    return (
        <HomeContainer>
            <h1>Home</h1>
            <Card>
               <h3>Minha produção</h3>
                <Separator />
                <Progressbar />
            </Card>

            <FlexRow>
            <Card flexWidth={2}>
                <h3>Ganhos do mês</h3>
                <Separator />        
                <FlexRow>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                </FlexRow>
            </Card>

            <Card flexWidth={2}>
                <h3>Ganhos do Ano</h3>
                <Separator />        
                <FlexRow>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                </FlexRow>
            </Card>
            </FlexRow>
            
            <FlexRow>
            <Card flexWidth={2}>
                <h3>Produção do mês</h3>
                <Separator />        
                <FlexRow>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                </FlexRow>
            </Card>

            <Card flexWidth={2}>
                <h3>Produção do Ano</h3>
                <Separator />        
                <FlexRow>
                <Card flexWidth={3}>
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                </Card>
                <Card flexWidth={3}>
                    <span>Captações</span>
                    <h2>R$0,00</h2>
                </Card>
                <Card flexWidth={3}>
                    <span>Comissões</span>
                    <h2>R$0,00</h2>
                </Card>
                <Card flexWidth={3}>
                    <span>Comissões</span>
                    <h2>R$0,00</h2>
                </Card>
                <Card flexWidth={3}>
                    <span>Captações</span>
                    <h2>R$0,00</h2>
                </Card>
                <Card flexWidth={3}>
                    <span>Comissões</span>
                    <h2>R$0,00</h2>
                </Card>
                </FlexRow>
            </Card>
            </FlexRow>
                
        </HomeContainer>
    )
}