import { IPokemonGateway, isPsychic, PokemonFromAPI } from "./pokemon.gateway.interface";
import { PokemonRepository } from "./pokemon.repository";

export class collectPokemonUseCase {
    constructor(
        private readonly pokemonGateway: IPokemonGateway,
        private readonly pokemonRepository: PokemonRepository,
    ) {}

    async execute(name: PokemonFromAPI['name'], customName: `${string}-${PokemonFromAPI['type']}`) {
        const existingPokemons = await this.pokemonGateway.getAllPokemons();
        const myPokemon = existingPokemons.find(pokemon => pokemon.name === name );

        if(!myPokemon) {
            throw new Error(`Pokemon ${name} not found`);
        }

        const myPokemons = this.pokemonRepository.getAllPokemons();


        const pokemonAlreadyOwned = myPokemons.find(pokemon => pokemon.name === name);

        if(isPsychic(myPokemon)) {
            myPokemons.forEach(poke => {
                this.pokemonRepository.updatePokemonLvl(poke.name)
                this.pokemonRepository.updatePokemonLvl(poke.name)
            })
        }

        if(pokemonAlreadyOwned) {
            this.pokemonRepository.updatePokemonLvl(name);
        } else {
            this.pokemonRepository.addPokemon({name, lvl: 1, customName});
        }
    }
}