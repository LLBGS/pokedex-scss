import { createContext } from 'react';
import { ListI, MyPokeList } from '../interfaces/PokemonI';

const Context = createContext({
  myPokeList: [
    {
      name: '',
      imageUrl: '',
      url: '',
    },
  ],
  setFromMyPokeList: (pokemon: MyPokeList) => {},
  removeFromMyPokeList: (pokemon: ListI) => {},
});

export default Context;
