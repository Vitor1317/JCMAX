import { ProgressContainer } from "./styles";
import { Target } from "phosphor-react";

export function Progressbar(){
    return (
        <ProgressContainer>
            <div className="icon">
                <Target size={30} />
            </div>
            <div className="progress">
                <progress max={100} value={75}>75%</progress>
                <strong>Faltam apenas 2000 ponto(s) para voce atingir se tornar <span>GOLD</span></strong>
            </div>
        </ProgressContainer>
    )
}