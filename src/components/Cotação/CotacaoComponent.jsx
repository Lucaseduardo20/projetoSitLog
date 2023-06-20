import { useState } from "react";
import { CotacaoArticle, CotacaoHeader, CotacaoContent, CotacaoForm, CotacaoProgress } from "./CotacaoComponentStyled";
import { Line } from 'rc-progress';

export default function CotacaoComponent() {
    const [progress, setProgress] = useState(0);


    const menageProgress = (value) => {
        cpnsole.log(value)
    }
    return (
                <CotacaoContent>
                    <CotacaoArticle>
                        <CotacaoHeader>
                            <h2>COTAÇÃO</h2> <span>RÁPIDA</span>
                            <p>Solicite sua cotação e fale com um de nossos consultores.</p>
                        </CotacaoHeader>
                        <CotacaoForm>
                            <input type="text" class="styled-input" placeholder="Nome Completo" onBlur={e => menageProgress(e)}/>
                            <input type="text" class="styled-input" placeholder="Telefone" onBlur={e => menageProgress(e.target.value)}/>
                            <input type="text" class="styled-input" placeholder="E-mail" onBlur={e => menageProgress(e.target.value)}/>
                            <input type="text" class="styled-input" placeholder="Empresa" onBlur={e => menageProgress(e.target.value)}/>
                            <input type="text" class="styled-input" placeholder="CPF/CNPJ" onBlur={e => menageProgress(e.target.value)}/>
                            <button id="submit"> ENVIAR</button>
                        </CotacaoForm>
                    <CotacaoProgress>
                        <span>{progress}%</span>
                        <Line
                            percent={progress}
                            strokeWidth={5}
                            trailWidth={5}
                            strokeColor="#9E1E33"
                            trailColor="#4f0f19"
                            strokeLinecap="round"
                            style={{ position: 'relative', width: '50%' }}
                        >
                        </Line>
                    </CotacaoProgress>
                    </CotacaoArticle>
                </CotacaoContent>
    )
}