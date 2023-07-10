import React from "react";
import './style.css';

import SearchIcon from '../../assets/search.svg';
import MicrophoneIcon from '../../assets/microfone.png';

export default function Search(){
    
    return(
        <div>
            <div className='search-input-container'>
                <input className="search-input" type="text" placeholder="Ex. Pikachu"/>
                <div className="search-icon-container">
                    <img src={SearchIcon} alt="Icone de Busca" className="search-icon" />
                </div>
                <div className="search-voice">
                <img src={MicrophoneIcon} alt="" className="voice-icon" />               
                </div>
            </div>       
        </div>
    );
}