import {describe, it, expect, vitest, beforeEach} from 'vitest';
import { collectPokemonUseCase } from './collectPokemon.usecase';
import { PokemonRepository } from './pokemon.repository';
import { Pokemon } from './pokemon.gateway.interface';

const pokemonGatewayStub = {
    getAllPokemons: vitest.fn(() => {
        const response: Pokemon[] = [{
        name: 'toto',
        type: 'electric',
        hp: 35,
        attack: 55,
    },
    {
        name: 'tata',
        type: 'grass',
        hp: 45,
        attack: 49,
    }]
    return response;
})
}

describe('collectPokemon usecase', () => {
    let usecase: collectPokemonUseCase;

    beforeEach(() => {
        usecase = new collectPokemonUseCase(pokemonGatewayStub, new PokemonRepository());
    })

    it('should add pokemon succefully when the pokemon truly exist', () => {
        usecase.execute('toto', 'toto-electric');
    });

    it('should throw an error when the pokemon does not exist', () => {
        expect(() => usecase.execute('trtret', 'ertyey-electric')).toThrowError('Pokemon not found');
    });
})