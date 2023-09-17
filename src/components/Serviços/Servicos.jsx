import { useState } from "react";
import { ServicosStyled, ServicosHeader, ServicosContent, ServicoItem } from "./ServicosStyled";
import { useEffect } from "react";
import Expressa from './expressa.png'
import Fracionada from './fracionada.png'
import Especial from './especial.png'

export default function ServicosComponent() {
    const [data, setData] = useState([
        {
            'nome': 'Fracionada',
            'isActive': true,
            'imagem': Fracionada,
            'texto': 'Em termos simples, a carga fracionada é um tipo de serviço no qual o embarcador paga somente pelo espaço no caminhão utilizado pela sua remessa. Dessa forma, o custo com o transporte é fracionado entre outras cargas e, portanto, diminuído.'
        },
        {
            'nome': 'Especial',
            'isActive': false,
            'imagem': Especial,
            'texto': 'São consideradas especiais mercadorias com necessidades específicas em relação à temperatura, umidade, que sejam frágeis, perecíveis ou muito pesadas. Medicamentos são ótimos exemplos de transporte de cargas especiais. Dessa maneira, não podem ser transportadas da forma padrão, exigindo um maior planejamento.'
        },
        {
            'nome': 'expressa',
            'isActive': false,
            'imagem': Expressa,
            'texto': 'Por definição, carga expressa é aquela que demanda alta prioridade, com entrega pontual e no menor tempo possível. A entrega expressa costuma se dar de ponta a ponta e, a depender da distância, envolve o modal aéreo.'
        }
    ]);
 
    const HandleActivate = (servico, isActive) => {
        const updatedData = data.map(item => {
            if (item.nome === servico) {
                return { ...item, isActive: isActive };
            }
            return item;
        });

        setData(updatedData)
    }

    console.log(data)


    return (
        <ServicosStyled>
            <ServicosHeader>
                <div>
                    <h1 style={{
                        color: '#FFFFFF',

                    }}>NOSSOS</h1><br />
                    <h1 style={{
                        color: '#FF0E38',
                        marginTop: '-40px',
                    }}>SERVICOS</h1>
                </div>
                <button>SAIBA MAIS</button>
            </ServicosHeader>
            <ServicosContent>
                    {data.map((servico) => 
                        <ServicoItem servico={servico} onClick={() => HandleActivate(servico.nome, true)} onMouseLeave={() => HandleActivate(servico.nome, false)} key={servico.nome} className={servico.nome}>
                            <img style={{
                                width: '60%',
                            }} src={servico.imagem} alt="" />
                            <span><strong>{`CARGA ${servico.nome.toUpperCase()}`}</strong></span>
                            {servico.isActive && 
                                <p>{servico.texto}</p>
                            }
                        </ServicoItem>
                    )}
                    {/* <img src={Expressa} alt="" /> */}
            </ServicosContent>
        </ServicosStyled>
    )
}