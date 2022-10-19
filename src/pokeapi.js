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


export const getPokemons = async (limit = 50, offset=0) => {
    try {
        //atribuindo a uma variavel o link da api
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Error:", error);
    }

};

export const getPokemonData = async (url) => {
    try {
       
        const response = await fetch(url);
        return await response.json();

    } catch (error) {
        console.log("Error:", error);
    }

};