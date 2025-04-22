

export class PokemonRepository {
    #pokemons: {name: string, customName: string; lvl: number}[] = [];

    addPokemon(pokemon: {name: string, lvl: number, customName: string}) {
        this.#pokemons.push(pokemon);
    }

    getPokemon(name: string): {name: string, lvl: number} | undefined {
        return this.#pokemons.find(pokemon => pokemon.name === name);
    }

    updatePokemonLvl(name: string): void {
        const pokemon = this.getPokemon(name);
        if (pokemon) {
            pokemon.lvl += 1;
        } else {
            throw new Error('Pokemon not found');
        }
    }

    getAllPokemons(): {name: string, lvl: number}[] {
        return this.#pokemons;
    }
}