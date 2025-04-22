export interface PokemonFromAPI {name: string, type: string, hp: number, attack: number}

export interface IPokemonGateway {
    getAllPokemons(): PokemonFromAPI[];
}