export const logPokemon = (pokemon: {
    name: string,
    type: string
    hp: number,
    attack: number,
    lvl: number
}) => {
    console.log(`${pokemon.name} (lvl ${pokemon.lvl}) is type ${pokemon.type} and has ${pokemon.hp} hp and ${pokemon.attack} attack`);
}
