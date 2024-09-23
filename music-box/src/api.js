// AXIOS: uma biblioteca usada no React para fazer requisições HTTP de forma fácil

import axios from "axios"; // Importando a biblioteca axios.

const api = axios.create({ // Criando uma instância do axios

    //baseURL: "https://66db74c5f47a05d55be80a9c.mockapi.io/music-box" 
    baseURL: process.env.REACT_APP_API_URL 
    // process.env + NOME da variável que criamos no .env
    
});

export default api; //Exportando a instância do axios