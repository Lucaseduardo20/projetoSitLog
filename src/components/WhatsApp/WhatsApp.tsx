import React from "react";
import WppImg from "../../assets/img/whatsapp.png";

export default function WhatsApp (){
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5511966836931&text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '9999',
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                textAlign: 'center',
                lineHeight: '50px',
                textDecoration: 'none',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer'
            }}
        >
            <img src={WppImg} alt="WhatsApp" style={{ width: '100%', height: 'auto' }} />
        </a>
    )
} 