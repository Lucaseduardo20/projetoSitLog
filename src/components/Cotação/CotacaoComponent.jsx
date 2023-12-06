import { useState } from "react";
import { CotacaoArticle, CotacaoHeader, CotacaoContent, CotacaoForm, CotacaoProgress } from "./CotacaoComponentStyled";
import { cnpjMask, cpfMask } from "../../assets/utils/utils";
import { Line } from 'rc-progress'
import { newLeadApi } from "../../services/newLeadApi";

export default function CotacaoComponent() {
    const [progress, setProgress] = useState(0);
    const [fieldList, setFieldList] = useState([])
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cnpj, setCnpj] = useState()
    const [telefone, setTelefone] = useState()
    const [empresa, setEmpresa] = useState()
    


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

    const submitCotacao = async () => {
        if(!nome || !telefone || !email || !empresa || !cnpj) {
           alert('Preencha os campos corretamente!') 
        } else if (!email.includes('@') || !email.includes('.com')) {
            alert('E-mail incorreto!')
        } else {
            await sendLead()
        }
    }

    const sendLead = async () => {
        const response = await newLeadApi({
            nome: nome,
            telefone: telefone,
            email: email,
            empresa: empresa,
            cnpj: cnpj
        })

        if(response.status === 200) {
            alert('Em breve um consultor entrará em contato com você. Obrigado!')
        }
    }
    return (
                <CotacaoContent id="cotacao">
                    <CotacaoArticle>
                        <CotacaoHeader>
                            <h2>COTAÇÃO</h2> <span>RÁPIDA</span>
                            <p>Solicite sua cotação e fale com um de nossos consultores.</p>
                        </CotacaoHeader>
                        <CotacaoForm>
                            <input type="text" className="styled-input" value={nome} placeholder="Nome Completo" onChange={e => setNome(e.target.value)} onBlur={e => manageProgress(e.target.value, 'nome')}/>
                            <input type="text" className="styled-input" value={telefone} placeholder="Telefone" onChange={e => setTelefone(e.target.value)} onBlur={e => manageProgress(e.target.value, 'tel')}/>
                            <input type="text" className="styled-input" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} onBlur={e => manageProgress(e.target.value, 'email')}/>
                            <input type="text" className="styled-input" value={empresa} placeholder="Empresa" onChange={e => setEmpresa(e.target.value)} onBlur={e => manageProgress(e.target.value, 'empresa')}/>
                            <input type="text" className="styled-input" value={cnpj} placeholder="CPF/CNPJ" onChange={e => setCnpj(e.target.value)} onBlur={e => {manageProgress(e.target.value, 'cpf'); setCnpj(`${e.target.value.length > 11 ? cnpjMask(e.target.value) : cpfMask(e.target.value)}`)}}/>
                            <button id="submit" onClick={e => submitCotacao()}>ENVIAR</button>
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