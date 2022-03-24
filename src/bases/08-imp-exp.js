import heroes, {owners} from "../data/heroes";

const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

console.log(getHeroById(2));

const getHeroByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroByOwner("DC"));

console.log(owners);

export default getHeroById;