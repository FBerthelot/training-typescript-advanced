import { collectPokemonUseCase } from "./collectPokemon.usecase";
import { getMyPokemons } from "./getMyPokemons.usecase";
import { logPokemon } from "./logger";
import { PokemonGateway } from "./pokemon.gateway";
import { PokemonRepository } from "./pokemon.repository";

console.log('Start playing the game...');

const pokemonRepository = new PokemonRepository()
const pokemonGateway = new PokemonGateway()


new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('pikachu', 'pikachu-electric')

new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('bulbizare', 'bulbizare-grass')

new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('pikachu', 'pikachu-electric')

new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('mewtwo', 'mewtwo-psychic')


const myPokemons = new getMyPokemons(
    pokemonGateway,
    pokemonRepository
).execute();

myPokemons.forEach(logPokemon)