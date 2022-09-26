import { HomeContainer, Separator, FlexRow} from "./styles";
import { Card } from "../../components/Card";
import { Progressbar } from "../../components/Progressbar";
import {
CurrencyDollar, 
ChartLineUp, 
Money, 
Handshake, 
UserPlus, 
CurrencyCircleDollar,
Camera,
Calculator
} from "phosphor-react";

export function Home(){
    return (
        <HomeContainer>
            <h1>Home <small>Dashboard</small></h1>
            <Card>
                <div className="flex">
                    <ChartLineUp size={24} />
                    <h2>Minha produção</h2>
                </div>
                <Separator />
                <Progressbar />
            </Card>

            <FlexRow>
            <Card flexWidth={2}>
                <div className="flex">
                    <CurrencyDollar size={24} />
                    <h3>Meus ganhos em setembro/2022</h3>
                </div>
                <Separator />        
                <FlexRow>
                    <Card flexWidth={3} bg="card">
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3} bg="card">
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3} bg="card">
                        <span>Exclusividades</span>
                        <h2>R$0,00</h2>
                    </Card>
                </FlexRow>
            </Card>

            <Card flexWidth={2}>
                <div className="flex">
                    <CurrencyDollar size={24} />
                    <h3>Meus ganhos em 2022</h3>
                </div>
                <Separator />        
                <FlexRow>
                    <Card flexWidth={3} bg="card">
                        <span>Comissões</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3} bg="card">
                        <span>Captações</span>
                        <h2>R$0,00</h2>
                    </Card>
                    <Card flexWidth={3} bg="card">
                        <span>Exclusividades</span>
                        <h2>R$0,00</h2>
                    </Card>
                </FlexRow>
            </Card>
            </FlexRow>
            
            <FlexRow>
            <Card flexWidth={2}>
                <div className="flex">
                    <ChartLineUp size={24} />
                    <h3>Minha Produção em setembro/2022</h3>
                </div>
                <Separator />        
                <FlexRow>
                    <Card direction flexWidth={3} bg="yellow6" fontColor="gray1">
                        <Money size={24} />
                        <div className="flexicon">
                            <small>VGV(R$)</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="blue5" fontColor="gray1">
                        <Handshake size={24} />
                        <div className="flexicon">
                            <small>VENDAS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="rosa" fontColor="gray1">
                        <UserPlus size={24} />
                        <div className="flexicon">
                            <small>EXCLUSIVIDADES</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="roxo" fontColor="gray1">
                        <CurrencyCircleDollar size={24} />
                        <div className="flexicon">
                                <small>CAPTAÇÕES</small>
                                <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="green5" fontColor="gray1">
                        <Camera size={24} />
                        <div className="flexicon">
                            <small>ANÚNCIOS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="gray5" fontColor="gray1">
                        <Calculator size={24} />
                        <div className="flexicon">
                            <small>PROPOSTAS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                </FlexRow>
            </Card>

            <Card flexWidth={2}>
                <div className="flex">
                    <ChartLineUp size={24} />
                    <h3>Minha Produção em 2022</h3>
                </div>
                <Separator />        
                <FlexRow>
                    <Card direction flexWidth={3} bg="yellow6" fontColor="gray1">
                        <Money size={24} />
                        <div className="flexicon">
                            <small>VGV(R$)</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="blue5" fontColor="gray1">
                        <Handshake size={24} />
                        <div className="flexicon">
                            <small>VENDAS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="rosa" fontColor="gray1">
                        <UserPlus size={24} />
                        <div className="flexicon">
                            <small>EXCLUSIVIDADES</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="roxo" fontColor="gray1">
                        <CurrencyCircleDollar size={24} />
                        <div className="flexicon">
                                <small>CAPTAÇÕES</small>
                                <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="green5" fontColor="gray1">
                        <Camera size={24} />
                        <div className="flexicon">
                            <small>ANÚNCIOS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                    <Card direction flexWidth={3} bg="gray5" fontColor="gray1">
                        <Calculator size={24} />
                        <div className="flexicon">
                            <small>PROPOSTAS</small>
                            <h2>0</h2>
                        </div>
                    </Card>
                </FlexRow>
            </Card>
            </FlexRow>
                
        </HomeContainer>
    )
}