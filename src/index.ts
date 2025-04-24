import { collectPokemonUseCase } from "./collectPokemon.usecase";
import { getMyPokemons } from "./getMyPokemons.usecase";
import { logPokemon } from "./logger";
import { PokemonGateway } from "./pokemon.gateway";
import { PokemonRepository } from "./pokemon.repository";

console.log('Start playing the game...');

const pokemonRepository = new PokemonRepository()
const pokemonGateway = new PokemonGateway()

async function start () {
    await new collectPokemonUseCase(
        pokemonGateway,
        pokemonRepository
    ).execute('pikachu', 'pikachu-electric')
    
    await new collectPokemonUseCase(
        pokemonGateway,
        pokemonRepository
    ).execute('bulbasaur', 'bulbizare-grass')
    
    await new collectPokemonUseCase(
        pokemonGateway,
        pokemonRepository
    ).execute('pikachu', 'pikachu-electric')
    
    await new collectPokemonUseCase(
        pokemonGateway,
        pokemonRepository
    ).execute('mewtwo', 'mewtwo-psychic')
    
    
    const myPokemons = await new getMyPokemons(
        pokemonGateway,
        pokemonRepository
    ).execute();
    
    myPokemons.forEach(logPokemon)
}

start()
    .then(() => {
        console.log('Game finished');
    })
    .catch((error) => {
        console.error('Error during the game:', error);
    });