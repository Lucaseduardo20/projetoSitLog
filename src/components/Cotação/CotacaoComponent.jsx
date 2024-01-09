import { useState, useEffect } from "react";
import { CotacaoArticle, CotacaoHeader, CotacaoContent, CotacaoForm, CotacaoProgress } from "./CotacaoComponentStyled";
import { cnpjMask, cpfMask, inputValueMask } from "../../assets/utils/utils";
import { Line } from 'rc-progress'
import { newLeadApi } from "../../services/newLeadApi";
import InputMask from 'react-input-mask';


export default function CotacaoComponent() {
    const [progress, setProgress] = useState(0);
    const [fieldList, setFieldList] = useState([])
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [valor, setValor] = useState('')
    const [altura, setAltura] = useState('')
    const [largura, setLargura] = useState('')
    const [peso, setPeso] = useState('')
    const [telefone, setTelefone] = useState('')
    const [empresa, setEmpresa] = useState()
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [typeTel, setTypeTel] = useState()



    const telOrCel = (value) => {
        if (value.replace(/\D/g, '').length === 10) {
            setTypeTel('tel')
        } else {
            setTypeTel('cel')
        }
    }
    const manageProgress = (value, field) => {
        let updatedList = fieldList;

        if (value && !updatedList.includes(field)) {
            updatedList = [...updatedList, field]
        } else if (!value && updatedList.includes(field)) {
            updatedList = updatedList.filter(item => item !== field);
        }

        setFieldList(updatedList)
        setProgress((updatedList.length * 12.5))
    };

    const submitCotacao = async () => {
        if (!nome || !telefone || !email || !empresa || !valor || !altura || !peso || !largura) {
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
            valor: valor,
            altura: altura,
            largura: largura,
            peso: peso

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
                        <InputMask id="telefone" type="text" mask={`${typeTel === 'tel' ? '(99) 9999-9999' : '(99) 99999-9999'}`} className="styled-input" value={telefone} placeholder={isMobile ? '' : 'Telefone'} onChange={e => setTelefone(e.target.value)} onBlur={(e) => { manageProgress(e.target.value, 'tel'); telOrCel(e.target.value) }} />
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
                        <input id="valor" type="text" className="styled-input" value={valor ? `R$ ${valor}` : valor} placeholder={isMobile ? '' : 'Valor de NF'} onChange={e => setValor(inputValueMask(e.target.value))} onBlur={e => { manageProgress(e.target.value, 'valor') }} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="altura">Altura</label>
                        }
                        <input id="altura" type="text" className="styled-input" value={altura} placeholder={isMobile ? '' : 'Altura (cm)'} onChange={e => {
                            const re = /^\d*$/;
                            if (re.test(e.target.value)) {
                                setAltura(e.target.value);
                            }
                        }} onBlur={e => { manageProgress(e.target.value, 'altura') }} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="largura">Largura (cm)</label>
                        }
                        <input id="largura" type="text" className="styled-input" value={largura} placeholder={isMobile ? '' : 'Largura (cm)'} onChange={e => {
                            const re = /^\d*$/;
                            if (re.test(e.target.value)) {
                                setLargura(e.target.value);
                            }
                        }} onBlur={e => { manageProgress(e.target.value, 'largura') }} />
                    </div>
                    <div className="input-box">
                        {isMobile &&
                            <label htmlFor="peso">Peso (Kg)</label>
                        }
                        <input id="peso" type="text" className="styled-input" value={peso} placeholder={isMobile ? '' : 'Peso (Kg)'} onChange={e => {
                            const re = /^\d*$/;
                            if (re.test(e.target.value)) {
                                setPeso(e.target.value);
                            }
                        }} onBlur={e => { manageProgress(e.target.value, 'peso') }} />
                    </div>
                    <button id="submit" onClick={e => submitCotacao()}>ENVIAR</button>
                </CotacaoForm>
                <CotacaoProgress>
                    <span>{progress}%</span>
                    <Line
                        percent={progress}
                        strokeWidth={isMobile ? 10 : 5}
                        trailWidth={isMobile ? 10 : 5}
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