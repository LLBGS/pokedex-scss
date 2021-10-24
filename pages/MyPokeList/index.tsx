import { useContext, useEffect, useState } from 'react';

import { List } from '../../src/components/List';
import Context from '../../src/contexts/Context';
import { ListI } from '../../src/interfaces/PokemonI';

import styles from './styles.module.scss';

export default function MyPokeList() {
  const { myPokeList } = useContext(Context);
  const [list, setList] = useState<ListI[]>([]);

  useEffect(() => {
    const myList = myPokeList.map((item) => {
      return {
        name: item.name,
        url: item.url,
      };
    });
    setList(myList);
  }, [myPokeList]);

  return (
    <div className={styles.pokedex}>
      <h2 className={styles.pokedex__title}>Meus Pokemons</h2>
      {list.length > 0 ? (
        <List pokeList={list} />
      ) : (
        <p className={styles.pokedex__empty}>
          Nenhum Pokemon Foi Adicionado a Sua Pokedex...
        </p>
      )}
    </div>
  );
}
