import styles from './Header.module.css'; // importação de um module.css 
// diferente do css normal o ele precisa da importação
//  por convenção criamos componentes com a letra maiuscula para não confundir com os elementos do html

console.log(styles)
export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
