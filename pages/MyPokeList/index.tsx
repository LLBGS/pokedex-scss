import { useContext, useEffect, useState } from 'react';
import { List } from '../../src/components/List';
import Context from '../../src/contexts/Context';
import { ListI } from '../../src/interfaces/PokemonI';

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
    <>
      <div>teste</div>
      <List pokeList={list} />
    </>
  );
}
