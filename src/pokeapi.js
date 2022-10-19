export const searchPokemonApi = async (pokemon) => {
    try {
        //atribuindo a uma variavel o link da api
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Error:", error);
    }

};

//função para retornar todos os pokemons comm um limite de 50 por vez, inicializando no item0 
export const getPokemons = async (limit, offset) => {
    try {
        //atribuindo a uma variavel o link da api
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Error:", error);
    }

};

//função para retornar as informações de um pokemon especifico
export const getPokemonData = async (url) => {
    try {
       
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Error:", error);
    }

};