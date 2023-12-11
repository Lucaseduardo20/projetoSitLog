import { useState } from "react";
import { ServicosStyled, ServicosHeader, ServicosContent, ServicoItem } from "./ServicosStyled";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { useEffect } from "react";
import Expressa from './expressa.png'
import Fracionada from './fracionada.png'
import Especial from './especial.png'

export default function ServicosComponent() {
    const [data, setData] = useState([
        {
            'nome': 'Fracionada',
            'isActive': false,
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
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

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

    const HandleActivate = (servico, isActive) => {
        var updatedData;
        if (servico === 'todos') {
            updatedData = data.map(item => {
                return { ...item, isActive: true }
            })
        } else {
            updatedData = data.map(item => {
                if (item.nome === servico) {
                    return { ...item, isActive: isActive };
                }
                return item;
            });
        }

        setData(updatedData)
    }


    return (
        <ServicosStyled id="servicos">
            <ServicosHeader>
                <div>
                    <h1 style={{
                        color: `${!isMobile ? 'white' : 'black'}`,

                    }}>NOSSOS</h1><br />
                    <h1 style={{
                        color: '#FF0E38',
                        marginTop: '-40px',
                    }}>SERVIÇOS</h1>
                </div>
                {!isMobile &&
                    <button onClick={() => HandleActivate('todos', true)}>SAIBA MAIS</button>
                }
            </ServicosHeader>
            <ServicosContent>
                {data.map((servico) =>
                    <ServicoItem servico={servico} key={servico.nome} className={servico.nome}>
                        <img src={servico.imagem} alt="" />
                        <span><strong>{`CARGA ${servico.nome.toUpperCase()}`}</strong></span>
                        {(servico.isActive) &&
                            <p>{servico.texto}</p>
                        }
                        {isMobile &&
                            <button className="know-more-button" onClick={() => HandleActivate(servico.nome, !servico.isActive)}>{servico.isActive ? <FiChevronUp /> : <IoIosMore />}</button>
                        }

                        {!isMobile &&
                            <button className="know-more-button-desktop" onClick={() => HandleActivate(servico.nome, !servico.isActive)}>{servico.isActive ? <FiChevronUp /> : <IoIosMore />}</button>
                        }
                    </ServicoItem>
                )}
                {/* <img src={Expressa} alt="" /> */}
            </ServicosContent>
        </ServicosStyled>
    )
}