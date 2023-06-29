import React from "react";
import './style.css';

import SearchIcon from '../../assets/search.svg';

export default function Search(){
    

        
    
    return(
        <div>
            <div className='search-input-container'>
                <input className="search-input" type="text" placeholder="Ex. Pikachu"/>
                <div className="search-icon-container">
                    <img src={SearchIcon} alt="Icone de Busca" className="search-icon" />
                </div>
            </div>            
            <div className="search-voice">
                
            </div>
            <div className='filter-button'></div>
        </div>
    );
}