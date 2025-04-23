import { PokemonType } from "./pokemon.entities";

export interface PokemonFromAPI {name: string, type: PokemonType, hp: number, attack: number}

type PokemonBase = {
    name: string
    hp: number,
    attack: number,
}

type PokemonPsy = PokemonBase & {
    type: 'psychic',
    lvlBonusToOtherPokemon: 2
}

type PokemonOther = PokemonBase & {
    type: 'electric' | 'grass' | 'fire' | 'water'
}

export type Pokemon = PokemonPsy | PokemonOther

export interface IPokemonGateway {
    getAllPokemons(): Pokemon[];
}

export const isPsychic = (pokemon: Pokemon): pokemon is PokemonPsy => pokemon.type === 'psychic';