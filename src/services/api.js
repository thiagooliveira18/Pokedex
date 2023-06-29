import axios from "axios"; //importando o axios

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/', //Cria uma endpoit na api pokedex
});

const apiImagem = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

const APIs = {
    api,
    apiImagem
}

export default APIs; //exportando o endpoint
