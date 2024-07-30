
import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemon";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
        const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
            id: pokemon.url?.split('/').at(-2) ?? '1',  // Asignar un valor por defecto si `id` es `undefined`
            name: pokemon.name,
          }));
          
          return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(386);
    return (
        <div className="flex flex-col">
            <span className="text-xl my-2">Listado de Pokemon <small>estatico</small></span>
            <PokemonGrid pokemons={pokemons}/>
        </div>
    );
}