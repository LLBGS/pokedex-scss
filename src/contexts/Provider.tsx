import { useState } from 'react';
import { ContextI } from '../interfaces/PokemonI';
import Context from './Context';

const AppProvider = ({ children }) => {
  const defaultData: ContextI = {
    myPokeList: [],
  };
  const [contextData, setContextData] = useState<ContextI>(defaultData);

  return (
    <Context.Provider value={{ test: 'test' }}>{children}</Context.Provider>
  );
};

export default AppProvider;
