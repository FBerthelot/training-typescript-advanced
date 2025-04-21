const pokemons: {
    name: string,
    type: string
    hp: number,
    attack: number,
}[] = [
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
    }
]


const logPokemon = (pokemon: {
    name: string,
    type: string
    hp: number,
    attack: number,
}) => {
    console.log(`${pokemon.name} is type ${pokemon.type} and has ${pokemon.hp} hp and ${pokemon.attack} attack`);
}


logPokemon(pokemons[0]);