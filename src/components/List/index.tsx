import Link from 'next/link';
import Image from 'next/image';

import { ListI } from '../../interfaces/PokemonI';

type ListProp = {
  pokeList: ListI[];
};

export function List({ pokeList }: ListProp) {
  const getPokeIndex = (pokemon: ListI) => {
    try {
      const re = /\/[0-9]+/;
      const url = pokemon?.url?.match(re);
      if (url) {
        return url[0].replace('/', '');
      }
    } catch (error) {
      throw new Error('Index não encontrado');
    }
  };

  return (
    <ul>
      {pokeList &&
        pokeList.map((pokemon, i) => (
          <li key={pokemon.name}>
            <Link
              href={{
                pathname: `/Details/[name]`,
                query: { name: pokemon.name },
              }}
            >
              <a style={{ display: 'flex' }}>
                <Image
                  width={100}
                  height={100}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeIndex(
                    pokemon
                  )}.png`}
                  alt='Pokémon Image'
                />
                {pokemon.name}
              </a>
            </Link>
            <button>Adicionar</button>
            <button>Excluir</button>
          </li>
        ))}
    </ul>
  );
}
