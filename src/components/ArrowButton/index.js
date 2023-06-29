import React, { useEffect, useState } from "react";
import './style.css';

import ArrowRight from '../../assets/right-arrow.png';
import ArrowLeft from '../../assets/left-arrow.png';

export default function ArrowButton({isRight}){

    const [imagem, setImagem] = useState(ArrowRight);

    useEffect(() => {
        if(isRight){
            setImagem(ArrowRight);
        }else{
            setImagem(ArrowLeft);
        }
    },[isRight]);

    return(
        <div className='botao'>
            {
                    isRight 
                    ? <img src={imagem} alt="seta direita" className="arrow" style={{marginLeft: 5}} />
                    : <img src={imagem} alt="seta esquerda" className="arrow" style={{marginRight: 5}} />
            }
        </div>
    );
}