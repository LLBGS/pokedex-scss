import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ListI, MyPokeList } from '../../interfaces/PokemonI';
import Context from '../../contexts/Context';

import styles from './styles.module.scss';

type ListProp = {
  pokeList: ListI[];
};

export function List({ pokeList }: ListProp) {
  const { setFromMyPokeList, removeFromMyPokeList, myPokeList } =
    useContext(Context);

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

  const preventDuplicityPokemon = (pokemon: ListI) => {
    const data = myPokeList.filter(
      (tmpPokemon) => tmpPokemon.name === pokemon.name
    );
    return data.length === 0 ? true : false;
  };

  const setMyPokemonInContext = (pokemon: ListI) => {
    preventDuplicityPokemon(pokemon) &&
      setFromMyPokeList({
        ...pokemon,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeIndex(
          pokemon
        )}.png`,
      });
  };

  useEffect(() => {
    console.log(myPokeList);
  }, [myPokeList]);

  return (
    <ul className={styles.list}>
      {pokeList &&
        pokeList.map((pokemon) => (
          <li key={pokemon.name} className={styles.list__item}>
            <Link
              href={{
                pathname: `/Details/[name]`,
                query: { name: pokemon.name },
              }}
            >
              <a style={{ display: 'flex' }} className={styles.list__anchor}>
                <Image
                  className={styles.list__thumbnail}
                  width={100}
                  height={200}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokeIndex(
                    pokemon
                  )}.png`}
                  alt='Pokémon Image'
                />
                <span className={styles.list__name}>{pokemon.name}</span>
              </a>
            </Link>
            {preventDuplicityPokemon(pokemon) ? (
              <button
                className={styles.list__add}
                onClick={() => setMyPokemonInContext(pokemon)}
              >
                Adicionar
              </button>
            ) : (
              <button
                className={styles.list__remove}
                onClick={() => removeFromMyPokeList(pokemon)}
              >
                Excluir
              </button>
            )}
          </li>
        ))}
    </ul>
  );
}
