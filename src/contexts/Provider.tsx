import { useState } from 'react';

import { ContextI, ListI } from '../interfaces/PokemonI';
import Context from './Context';
import { MyPokeList } from '../interfaces/PokemonI';

const AppProvider = ({ children }) => {
  const defaultData: MyPokeList[] = [];
  const [myPokeList, setMyPokelist] = useState<MyPokeList[]>(defaultData);

  const setFromMyPokeList = (pokemon: MyPokeList): void => {
    setMyPokelist([...myPokeList, pokemon]);
  };

  const removeFromMyPokeList = (pokemon: ListI): void => {
    const newList = myPokeList.filter(
      (tmpPokemon) => tmpPokemon.name !== pokemon.name
    );
    setMyPokelist(newList);
  };
  return (
    <Context.Provider
      value={{ myPokeList, setFromMyPokeList, removeFromMyPokeList }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppProvider;
