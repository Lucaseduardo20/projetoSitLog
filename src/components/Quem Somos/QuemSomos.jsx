import {useState, useEffect} from "react";
import { QuemSomosStyled, QuemSomosContent } from "./QuemSomosStyled";
import img from '../Quem Somos/quem-somos.png'

export const QuemSomos = () => {
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

    return (
        <QuemSomosStyled id="quem-somos">
            <QuemSomosContent>
                {!isMobile &&
                    <img src={img} />
                }
                <div id="quem-somos">
                    <h1>SIT<span style={{color: '#D90034'}}>LOG</span></h1>
                    <div id="quem-somos-text">
                        <p>A Sitlog foi fundada em maio de 2013, com foco no transporte de cargas aéreas e rodoviárias, incluindo cargas fracionadas e expressas. Nosso compromisso primordial é oferecer aos clientes as melhores soluções de transporte para suas necessidades empresariais. Independentemente do tipo de demanda, asseguramos prazos imbatíveis, entregas rápidas, pontualidade e máxima segurança.</p><br />
                        <p>Nossa principal meta é criar soluções logísticas sob medida para satisfazer as expectativas de nossos clientes. Quando se trata de movimentação de cargas, conte conosco para garantir uma experiência logística eficiente e confiável.</p><br />
                        <p>Entre em contato conosco e descubra como podemos ajudá-lo a otimizar o transporte de suas cargas, contando com nossos serviços de transporte aéreo e rodoviário. Estamos prontos para atender suas necessidades e proporcionar a melhor experiência logística possível.</p>
                    </div>
                </div>
            </QuemSomosContent>
        </QuemSomosStyled>
    )
}