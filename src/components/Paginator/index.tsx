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
        <BsArrowLeftCircleFill color={'red'} widths={50} width={50} />
      </button>
      <button
        className={styles.paginator__next}
        type='button'
        onClick={() => sendOffset('next')}
      >
        <BsArrowRightCircleFill width={50} height={50} />
      </button>
    </div>
  );
}
