import styles from './Header.module.css';

export function Header() { // letra maiuscula para não confundir com elementos do proprio html <header>
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
