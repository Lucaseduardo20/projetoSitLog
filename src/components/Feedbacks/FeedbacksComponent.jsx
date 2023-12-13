import React from 'react'
import { FeedbacksStyled } from './FeedbacksStyled'
import { FaStar } from 'react-icons/fa'


export default function Feedbacks () {

    // const feedbacks = [
    //     {
    //         'nomeEmpresa': 'lucasdev',
    //         'texto': 'muito bom seu trabalho',
    //         'quantidade': 5
    //     },
    //     {
    //         'nomeEmpresa': 'lucasdev',
    //         'texto': 'muito bom seu trabalho',
    //         'quantidade': 5
    //     },
    //     {
    //         'nomeEmpresa': 'lucasdev',
    //         'texto': 'muito bom seu trabalho',
    //         'quantidade': 5
    //     },
    //     {
    //         'nomeEmpresa': 'lucasdev',
    //         'texto': 'muito bom seu trabalho',
    //         'quantidade': 5
    //     }
    // ]

    return (
        <FeedbacksStyled id='feedbacks'>
            <h2>FEEDBACKS</h2>
            <article>
                <div>
                    <div className="feedback-header">
                        <div>.</div>
                        <span>Nome do cliente</span>
                    </div>
                    <div className="feedback-body">
                        <p>"Conseguiram construir uma solução que vai te economizar muito tempo, e você vai poder dedicar mais para sua aplicação."</p>
                    </div>
                    <div className="feedback-footer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div> 
                    <div className="feedback-header">
                        <div>.</div>
                        <span>Nome do cliente</span>
                    </div>
                    <div className="feedback-body">
                        <p>"Conseguiram construir uma solução que vai te economizar muito tempo, e você vai poder dedicar mais para sua aplicação."</p>
                    </div>
                    <div className="feedback-footer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div>
                    <div className="feedback-header">
                        <div>.</div>
                        <span>Nome do cliente</span>
                    </div>
                    <div className="feedback-body">
                        <p>"Conseguiram construir uma solução que vai te economizar muito tempo, e você vai poder dedicar mais para sua aplicação."</p>
                    </div>
                    <div className="feedback-footer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div>
                    <div className="feedback-header">
                        <div>.</div>
                        <span>Nome do cliente</span>
                    </div>
                    <div className="feedback-body">
                        <p>"Conseguiram construir uma solução que vai te economizar muito tempo, e você vai poder dedicar mais para sua aplicação."</p>
                    </div>
                    <div className="feedback-footer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>              
            </article>
        </FeedbacksStyled>
    )
}

// {feedbacks.map(feedback => (
//     <div>
//         <div className="feedback-header">
//             <img></img>
//             <span>{feedback.nomeEmpresa}</span>
//         </div>
//         <div className="feedback-body">
//             <p>{feedback.texto}</p>
//         </div>
//         <div className="feedback-footer">
//             {/* {feedback.quantidade.map(estrela => (
//                 <p>estrela</p>
//             ))} */}
//         </div>
//     </div>
// ))}