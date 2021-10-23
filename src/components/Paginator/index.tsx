import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import styles from './styles.module.scss';

type PaginatorProps = {
  sendOffsetToParent: (data: 'next' | 'previous') => void;
};

export function Paginator({ sendOffsetToParent }: PaginatorProps) {
  const sendOffset = (data: 'next' | 'previous') => {
    sendOffsetToParent(data);
  };
  return (
    <div className={styles.paginator}>
      <button
        className={styles.paginator__previous}
        type='button'
        onClick={() => sendOffset('previous')}
      >
        <BsArrowLeftCircleFill color={'#e3350d'} size={48} />
      </button>
      <h2>Pegue Todos !!!</h2>
      <button
        className={styles.paginator__next}
        type='button'
        onClick={() => sendOffset('next')}
      >
        <BsArrowRightCircleFill color={'#30a7d7'} size={48} />
      </button>
    </div>
  );
}
