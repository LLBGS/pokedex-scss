import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Header } from '../src/components/Header';
import { AdvancedSearch } from '../src/components/AdvancedSearch';
import { Paginator } from '../src/components/Paginator';

import styles from '../styles/Home.module.scss';
import { List } from '../src/components/List';
import { ApiResponseI, ListI } from '../src/interfaces/PokemonI';
import { PokemonRepository } from '../src/repository/PokemonRepository';

const Home: NextPage = () => {
  const [pokeList, setPokeList] = useState<ListI[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const setListOfPokemons = async () => {
    const data = await PokemonRepository.findAllPokemons(0);
    if (data?.results) {
      setPokeList(data.results);
      setCount(data.count);
    }
  };

  const setPaginator = async (direction: 'next' | 'previous') => {
    switch (direction) {
      case 'next':
        if (offset < count) {
          const tmpOffset = offset + 10;
          const data = await PokemonRepository.findAllPokemons(tmpOffset);
          data.results.length > 0 && setPokeList(data.results);
          setOffset(tmpOffset);
        }
        break;

      default:
        if (offset >= 10 && count % offset) {
          const tmpOffset = offset - 10;
          const data = await PokemonRepository.findAllPokemons(tmpOffset);
          data.results.length > 0 && setPokeList(data.results);
          setOffset(tmpOffset);
        }
        break;
    }
  };

  const searchByType = async (type: string) => {
    try {
      const data = await PokemonRepository.findByType(type);
      data && setPokeList(data);
    } catch (error) {
      setListOfPokemons();
    }
  };

  const searchByAbility = async (ability: string) => {
    try {
      const data = await PokemonRepository.findByAbility(ability);
      data && setPokeList(data);
    } catch (error) {
      setListOfPokemons();
    }
  };

  useEffect(() => {
    setListOfPokemons();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <AdvancedSearch
        sendAbilityToParent={(ability) => searchByAbility(ability)}
        sendTypeToParent={(type) => searchByType(type)}
      />
      <Paginator
        sendOffsetToParent={(direction) => {
          setPaginator(direction);
        }}
      />
      <List pokeList={pokeList} />
    </div>
  );
};

export default Home;
