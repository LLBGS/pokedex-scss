import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { PokemonRepository } from '../../src/repository/PokemonRepository';
import { ApiFindByNameReponseT } from '../../src/types/PokemonT';

import styles from './styles.module.scss';
import { CapitalizeWord } from '../../src/helpers/utils';

export default function Details() {
  const [pokemon, setPokemon] = useState<ApiFindByNameReponseT>();
  const [name, setName] = useState<string>();
  const router = useRouter();

  const setCurrentPokemon = async () => {
    setName(String(router.query?.name));
    if (router.query?.name) {
      const data = await PokemonRepository.findPokemonByName(
        String(router.query?.name)
      );
      setPokemon(data);
    }
  };

  const formatId = (id?: number) => {
    let formated: string;
    switch (String(id).length) {
      case 1:
        formated = `Nº00${id}`;
        break;

      case 2:
        formated = `Nº0${id}`;
        break;
      default:
        formated = `Nº${id}`;
        break;
    }
    return formated;
  };

  useEffect(() => {
    setCurrentPokemon();
  }, []);

  return (
    <div className={styles.details}>
      <h2 className={styles.details__title}>
        {CapitalizeWord(pokemon?.name)} {formatId(pokemon?.id)}
      </h2>
      <div className={styles.details__profile}>
        <div className={styles.details__image}>
          {pokemon?.sprites?.front_default && (
            <Image
              src={pokemon?.sprites?.front_default || ''}
              width={500}
              height={500}
            />
          )}
        </div>
        <div className={styles.details__info}>
          <div className={styles.details__type}>
            <h3
              className={`${styles.details__subtitle} ${styles.details__yellow}`}
            >
              Tipos
            </h3>
            <div className={styles.details__types}>
              {pokemon?.types?.map((type, i) => (
                <div key={'types_' + i} className={styles.details__item}>
                  {CapitalizeWord(type.type.name)}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.details__ability}>
            <h3
              className={`${styles.details__subtitle} ${styles.details__green}`}
            >
              Habilidades
            </h3>
            <div className={styles.details__types}>
              {pokemon?.abilities?.map((ability, i) => (
                <div key={'types_' + i} className={styles.details__item}>
                  {CapitalizeWord(ability.ability.name)}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.details__physiognomy}>
            <h3
              className={`${styles.details__subtitle} ${styles.details__red}`}
            >
              status
            </h3>
            <div className={styles.details__types}>
              {pokemon?.stats?.map((item, i) => (
                <div key={'stat_' + i} className={styles.details__item}>
                  {item.stat.name}:{item.base_stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
