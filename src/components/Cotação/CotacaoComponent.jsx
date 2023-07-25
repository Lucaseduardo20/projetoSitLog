import { useState } from "react";
import { CotacaoArticle, CotacaoHeader, CotacaoContent, CotacaoForm, CotacaoProgress } from "./CotacaoComponentStyled";
import { Line } from 'rc-progress'

export default function CotacaoComponent() {
    const [progress, setProgress] = useState(0);
    const [fieldList, setFieldList] = useState([])


    const manageProgress = (value, field) => {
        let updatedList = fieldList;

        if (value && !updatedList.includes(field)) {
            updatedList = [... updatedList, field]
        } else if (!value && updatedList.includes(field)) {
            updatedList = updatedList.filter(item => item !== field);
        }

        setFieldList(updatedList)
        setProgress((updatedList.length * 20))
    };
    return (
                <CotacaoContent>
                    <CotacaoArticle>
                        <CotacaoHeader>
                            <h2>COTAÇÃO</h2> <span>RÁPIDA</span>
                            <p>Solicite sua cotação e fale com um de nossos consultores.</p>
                        </CotacaoHeader>
                        <CotacaoForm>
                            <input type="text" className="styled-input" placeholder="Nome Completo" onBlur={e => manageProgress(e.target.value, 'nome')}/>
                            <input type="text" className="styled-input" placeholder="Telefone" onBlur={e => manageProgress(e.target.value, 'tel')}/>
                            <input type="text" className="styled-input" placeholder="E-mail" onBlur={e => manageProgress(e.target.value, 'email')}/>
                            <input type="text" className="styled-input" placeholder="Empresa" onBlur={e => manageProgress(e.target.value, 'empresa')}/>
                            <input type="text" className="styled-input" placeholder="CPF/CNPJ" onBlur={e => manageProgress(e.target.value, 'cpf')}/>
                            <button id="submit">ENVIAR</button>
                        </CotacaoForm>
                    <CotacaoProgress>
                        <span>{progress}%</span>
                        <Line
                            percent={progress}
                            strokeWidth={5}
                            trailWidth={5}
                            strokeColor={progress == 0 ? '' : '#9E1E33'}
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