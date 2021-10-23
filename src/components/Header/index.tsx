import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link
          href={{
            pathname: `/`,
          }}
        >
          <a className={styles.header__link}>
            <Image src='/logo.png' width={200} height={50} />
          </a>
        </Link>
        <Link
          href={{
            pathname: `/MyPokeList`,
          }}
        >
          <a className={styles.header__link}>
            <Image src='/pokedex.png' width={80} height={50} />
            <p>pokedex</p>
          </a>
        </Link>
      </nav>
    </header>
  );
}
