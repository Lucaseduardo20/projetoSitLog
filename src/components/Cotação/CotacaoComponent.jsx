import { useState, useEffect } from "react";
import { CotacaoArticle, CotacaoHeader, CotacaoContent, CotacaoForm, CotacaoProgress } from "./CotacaoComponentStyled";
import { cnpjMask, cpfMask } from "../../assets/utils/utils";
import { Line } from 'rc-progress'
import { newLeadApi } from "../../services/newLeadApi";

export default function CotacaoComponent() {
    const [progress, setProgress] = useState(0);
    const [fieldList, setFieldList] = useState([])
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [valor, setValor] = useState()
    const [telefone, setTelefone] = useState()
    const [empresa, setEmpresa] = useState()
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });



    const manageProgress = (value, field) => {
        let updatedList = fieldList;

        if (value && !updatedList.includes(field)) {
            updatedList = [...updatedList, field]
        } else if (!value && updatedList.includes(field)) {
            updatedList = updatedList.filter(item => item !== field);
        }

        setFieldList(updatedList)
        setProgress((updatedList.length * 20))
    };

    const submitCotacao = async () => {
        if (!nome || !telefone || !email || !empresa || !cnpj) {
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

        if (response.status === 200) {
            alert('Em breve um consultor entrará em contato com você. Obrigado!')
        }
    }



    const isMobile = windowSize.width <= 800;

    useEffect(() => {
        // Função para atualizar o estado com as novas dimensões da janela
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <CotacaoContent id="cotacao">
            <CotacaoArticle>
                <CotacaoHeader>
                    <h2>COTAÇÃO</h2> <span>RÁPIDA</span>
                    <p>Solicite sua cotação e fale com um de nossos consultores.</p>
                </CotacaoHeader>
                <CotacaoForm>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="nome">Nome</label>
                        }
                        <input id="nome" type="text" className="styled-input" value={nome} placeholder={isMobile ? '' : 'Nome Completo'} onChange={e => setNome(e.target.value)} onBlur={e => manageProgress(e.target.value, 'nome')} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="telefone">Telefone</label>
                        }
                        <input id="telefone" type="text" className="styled-input" value={telefone} placeholder={isMobile ? '' : 'Telefone'} onChange={e => setTelefone(e.target.value)} onBlur={e => manageProgress(e.target.value, 'tel')} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="email">E-mail</label>
                        }
                        <input id="email" type="text" className="styled-input" value={email} placeholder={isMobile ? '' : 'E-Mail'} onChange={e => setEmail(e.target.value)} onBlur={e => manageProgress(e.target.value, 'email')} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="empresa">Empresa</label>
                        }
                        <input id="empresa" type="text" className="styled-input" value={empresa} placeholder={isMobile ? '' : 'Empresa'} onChange={e => setEmpresa(e.target.value)} onBlur={e => manageProgress(e.target.value, 'empresa')} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="valor">Valor de NF</label>
                        }
                        <input id="cnpj" type="text" className="styled-input" value={valor} placeholder={isMobile ? '' : 'VALOR DE NF'} onChange={e => setValor(e.target.value)} onBlur={e => { manageProgress(e.target.value, 'valor')}} />
                    </div>
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