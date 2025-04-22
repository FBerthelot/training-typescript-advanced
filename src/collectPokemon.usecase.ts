import { PokemonGateway } from "./pokemon.gateway";
import { PokemonRepository } from "./pokemon.repository";

export class collectPokemonUseCase {
    constructor(
        private readonly pokemonGateway: PokemonGateway,
        private readonly pokemonRepository: PokemonRepository,
    ) {}

    execute(name: string) {
        const existingPokemons = this.pokemonGateway.getAllPokemons();
        const myPokemon = existingPokemons.find(pokemon => pokemon.name === name );

        if(!myPokemon) {
            throw new Error('Pokemon not found');
        }

        const myPokemons = this.pokemonRepository.getAllPokemons();
        const pokemonAlreadyOwned = myPokemons.find(pokemon => pokemon.name === name);

        if(pokemonAlreadyOwned) {
            this.pokemonRepository.updatePokemonLvl(name);
        } else {
            this.pokemonRepository.addPokemon({name, lvl: 1});
        }
    }
}