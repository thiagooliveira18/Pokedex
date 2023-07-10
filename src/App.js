import './App.css';
import { useState, useEffect } from 'react';
import APIs from './services/api.js'; //importando o endpoint da Api

import Fundo from './assets/pokemon.png';


import Pokemon from './components/Pokemon/index';
import ArrowButton from './components/ArrowButton';
import Search from './components/Search';
import FilterButton from './components/FilterButton';

/*
Idéias:
  => Campo de pesquisa via teclado
  => Botão para pesquisa por Voz.
*/

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [index, setIndex] = useState([0,8]);

  useEffect(() => {
    APIs.api
      .get(`pokemon?limit=${index[1]}&offset=${index[0]}`)
      .then((response) => {        
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.error(`Um erro inesperado ocorreu. ${err}`);
      });
  },[pokemon,index]);  

  function handleNextPage() {    
    let limit = 8;
    let offSet = index[0] + 8;
    setIndex([offSet,limit]);
  }
  function handleBackPage(){
    if(index[0] > 0){
      let limit = 8;
      let offSet = index[0] - 8;
      setIndex([offSet,limit]);
    } else{
      alert('Não foi possível voltar a página da Pokedex.');
    }
  }

  return (

    <div className='geral-container'>
      <img src={Fundo} alt="Imagem de Fundo" className='background-image' />
      <div className="main-container">
        <div className='title-container'>
          <h1 className="title">Pokedex</h1>
        </div>
        <div className='content-container'>
          <div className='pokedex-container'>
            <div className='tela'>
              
            </div>
            <div className='botao-esq' onClick={() => {handleBackPage()}}>
              <ArrowButton
                isRight={false}                  
              />
            </div>
            <div className='botao-dir' onClick={() => {handleNextPage()}}>
              <ArrowButton 
                isRight={true}                 
              />
            </div>
            
            
          </div>
          <div className="body-container">
            <div className="buttons-container">
              <div className="search-area">
                <Search />
              </div>
            </div>
            <div className="card-container">
              {
                pokemon.map(pokemonAtual => {
                  return <Pokemon pokemon={pokemonAtual} />
                })
              }         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
