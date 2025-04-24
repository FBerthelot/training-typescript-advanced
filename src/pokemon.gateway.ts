import { PokemonType } from "./pokemon.entities";
import { Pokemon, PokemonFromAPI, PokemonPsy } from "./pokemon.gateway.interface";
import { z } from "zod";

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


const pokemonFromAPISchema = z.object({
    results: z.array(z.object({
        name: z.string(),
    }))
})

export class PokemonGateway {
    async getAllPokemons(): Promise<Pokemon[]> {
        const allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())

        
        const parsedPokemons = pokemonFromAPISchema.parse(allPokemons);
        
        return parsedPokemons.results.map((pokemons) => {
            if (pokemons.name === 'mewtwo') {
                return {
                    name: pokemons.name,
                    hp: 106,
                    attack: 110,
                    type: 'psychic',
                    lvlBonusToOtherPokemon: 2
                }
            }
            return {
                name: pokemons.name,
                hp: 106,
                attack: 110,
                type: 'electric',
            }
        });
    }

    getPokemonsByType<Type extends Pokemon>(type: PokemonType): Type[] {
        return pokemons.filter(pokemon => pokemon.type === type) as Type[];
    }
}


//const result: PokemonPsy = new PokemonGateway().getPokemonsByType<PokemonPsy>('psychic')[0];