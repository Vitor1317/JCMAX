import { ProgressContainer } from "./styles";
import { Target } from "phosphor-react";

export function Progressbar(){
    return (
        <ProgressContainer>
            <div className="icon">
                <Target size={30} />
            </div>
            <div className="progress">
                <progress max={100} value={75}></progress>
                <strong>Faltam apenas 25% para voce atingir sua meta</strong>
            </div>
        </ProgressContainer>
    )
}