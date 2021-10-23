import { createRef, useContext, useEffect, useState } from 'react';

import { ListI } from '../../interfaces/PokemonI';
import { PokemonRepository } from '../../repository/PokemonRepository';

import styles from './styles.module.scss';

type AdvancedSearchProps = {
  sendTypeToParent: (type: string) => void;
  sendAbilityToParent: (ability: string) => void;
};

export function AdvancedSearch({
  sendTypeToParent,
  sendAbilityToParent,
}: AdvancedSearchProps) {
  const [types, setTypes] = useState<ListI[] | null>([]);
  const [abilities, setAbilities] = useState<ListI[] | null>([]);
  const selectInput = createRef<HTMLSelectElement>();

  useEffect(() => {
    setListOfTypes();
    setListOfAbilities();
  }, []);

  const setListOfTypes = async () => {
    const data = await PokemonRepository.findAllTypes();
    if (data) setTypes(data.results);
  };

  const setListOfAbilities = async () => {
    const data = await PokemonRepository.findAllAbilities();
    if (data) setAbilities(data.results);
  };

  const handleClickType = (data: ListI) => {
    sendTypeToParent(data.name);
  };

  const handleSelect = () => {
    selectInput.current?.value &&
      sendAbilityToParent(selectInput.current?.value);
  };

  return (
    <div className={styles.advanced_search}>
      <div className={styles.advanced_search__filters}>
        <div className={styles.advanced_search__ability}>
          <h2>Habilidades</h2>
          <select
            ref={selectInput}
            name='ability'
            id='ability'
            onChange={handleSelect}
          >
            {abilities?.map((abilitie) => (
              <option key={abilitie.name} value={abilitie.name}>
                {abilitie.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.advanced_search__type}>
          <h2>Tipos</h2>
          {types?.map((type) => {
            return (
              <button
                key={type.name}
                onClick={() =>
                  handleClickType({ name: type.name, url: type.url })
                }
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>
      <h2 className={styles.advanced_search__title}>Pesquisa Avançada</h2>
    </div>
  );
}
