import { InputsContainer, Wrapper } from "./styles";
import {Card} from "../../components/Card";
import { InputLable } from "../../components/InputLabel";

export function AlterarDados(){
    return (
        <Wrapper>
            <h1>Usuário <small>editar informações</small></h1>

            <Card>
                <InputsContainer>
                    <InputLable title="Nome Completo" valor="Bruno Pontes Dos Santos" />
                    <InputLable title="Nome que gostaria de ser chamado" valor="Bruno" />
                    <InputLable title="E-mail" valor="bruno@jcmax.com" />
                    <InputLable title="CPF" valor="111.222.333-44" />
                    <InputLable title="CRECI" valor="12345" />
                    <InputLable title="Telefone" valor="(61)99999-9999" />
                    <div>
                        <strong>Alterar foto de Perfil:</strong>
                        <br />
                        <br />
                        <input type="file"/>
                    </div>
                </InputsContainer>
                
            </Card>
        </Wrapper>
    )
}