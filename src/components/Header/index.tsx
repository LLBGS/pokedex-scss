import Link from 'next/link';
import styles from './styles.module.scss';
export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link
          href={{
            pathname: `/`,
          }}
        >
          <a>Home</a>
        </Link>
        <Link
          href={{
            pathname: `/MyPokeList`,
          }}
        >
          <a>Minha PokeList</a>
        </Link>
      </nav>
    </header>
  );
}
