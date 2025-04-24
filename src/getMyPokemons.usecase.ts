import { PokemonGateway } from "./pokemon.gateway";
import { PokemonRepository } from "./pokemon.repository";

export class getMyPokemons {
    constructor(
        private readonly pokemonGateway: PokemonGateway,
        private readonly pokemonRepository: PokemonRepository,
    ) {}

    async execute() {
        const pokemons = await this.pokemonGateway.getAllPokemons();
        const myPokemons = this.pokemonRepository.getAllPokemons();

        return myPokemons.map(myPokemon => {
            const pokemon = pokemons.find(pokemon => pokemon.name === myPokemon.name);
            if (!pokemon) {
                throw new Error('Impossible : Pokemon not found');
            }
            return {
                ...pokemon,
                ...myPokemon
            }
        })
    }
}