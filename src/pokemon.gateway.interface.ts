import { PokemonType } from "./pokemon.entities";

export interface PokemonFromAPI {name: string, type: PokemonType, hp: number, attack: number}

export interface IPokemonGateway {
    getAllPokemons(): PokemonFromAPI[];
}