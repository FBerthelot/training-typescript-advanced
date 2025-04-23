import { Pokemon, PokemonFromAPI } from "./pokemon.gateway.interface";

const pokemons: PokemonFromAPI[] = [
    {
        name: 'pikachu',
        type: 'electric',
        hp: 35,
        attack: 55,
    },
    {
        name: 'bulbizare',
        type: 'grass',
        hp: 45,
        attack: 49,
    },
    {
        name: 'charmander',
        type: 'fire',
        hp: 39,
        attack: 52,
    },
    {
        name: 'squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
    },
    {
        name: 'mewtwo',
        type: 'psychic',
        hp: 106,
        attack: 110,
    }
]


export class PokemonGateway {
    getAllPokemons(): Pokemon[] {
        return pokemons.map(pokemons => {
            if (pokemons.type === 'psychic') {
                return {
                    ...pokemons,
                    type: 'psychic',
                    lvlBonusToOtherPokemon: 2
                }
            }
            return {
                ...pokemons,
                type: pokemons.type,
            }
        });
    }
}