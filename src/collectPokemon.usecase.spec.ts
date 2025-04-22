import {describe, it, expect, vitest, beforeEach} from 'vitest';
import { collectPokemonUseCase } from './collectPokemon.usecase';
import { PokemonRepository } from './pokemon.repository';

const pokemonGatewayStub = {
    getAllPokemons: vitest.fn(() => [{
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
    },])
}

describe('collectPokemon usecase', () => {
    let usecase: collectPokemonUseCase;

    beforeEach(() => {
        usecase = new collectPokemonUseCase(pokemonGatewayStub, new PokemonRepository());
    })

    it('should add pokemon succefully when the pokemon truly exist', () => {
        usecase.execute('toto');
    });

    it('should throw an error when the pokemon does not exist', () => {
        expect(() => usecase.execute('ertyey')).toThrowError('Pokemon not found');
    });
})