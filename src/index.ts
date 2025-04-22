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
).execute('pikachu')

new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('bulbizare')

new collectPokemonUseCase(
    pokemonGateway,
    pokemonRepository
).execute('pikachu')


const myPokemons = new getMyPokemons(
    pokemonGateway,
    pokemonRepository
).execute();

myPokemons.forEach(logPokemon)