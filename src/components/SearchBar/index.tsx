import { createRef } from 'react';

type SearchBarProps = {
  sendNameToParent: (name: string) => void;
};
export function SearchBar({ sendNameToParent }: SearchBarProps) {
  const searchInput = createRef<HTMLInputElement>();
  const handleClick = () => {
    sendNameToParent(searchInput.current?.value || '');
  };
  return (
    <div>
      <input type='text' ref={searchInput} />
      <button onClick={handleClick}>Pesquisar</button>
    </div>
  );
}
