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