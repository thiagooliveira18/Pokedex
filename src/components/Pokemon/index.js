import './style.css';
import {React, useEffect, useState} from 'react';
import APIs from '../../services/api';

function Pokemon({pokemon}) {

    const [imagem, setImagem] = useState('');

    useEffect(()=>{
        const url = pokemon.url.split('/');
        APIs.apiImagem
        .get(`${url[6]}/`)
        .then(response => {
            setImagem(response.data.sprites.front_default);
        })        
        .catch((err) => console.error(`Ocorreu um problema ao tentar capturar a imagem do pokemon! ${err}`));        
    },[pokemon])

    return(
        <div className='pokemon-container'>
            <img src={imagem} alt={pokemon.name} className='image'/>
            <div className='nome-container'>
                <p className='nome'>
                    {pokemon.name}
                </p>
            </div>
        </div>
    );
}

export default Pokemon;