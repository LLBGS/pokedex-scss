import { createRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import styles from './styles.module.scss';

type SearchBarProps = {
  sendNameToParent: (name: string) => void;
};
export function SearchBar({ sendNameToParent }: SearchBarProps) {
  const searchInput = createRef<HTMLInputElement>();
  const handleClick = () => {
    sendNameToParent(searchInput.current?.value || '');
  };
  return (
    <div className={styles.search_bar}>
      <input type='text' ref={searchInput} />
      <button onClick={handleClick} className={styles.search_bar__button}>
        <BiSearchAlt />
      </button>
    </div>
  );
}
