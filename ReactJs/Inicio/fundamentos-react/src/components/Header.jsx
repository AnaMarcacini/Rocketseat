import styles from './Header.module.css'; // importação de um module.css 
// diferente do css normal o ele precisa da importação
//  por convenção criamos componentes com a letra maiuscula para não confundir com os elementos do html
import igniteLogo from '../assets/ignite-logo.svg';

console.log(styles)
console.log(igniteLogo)
export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
      <img src={igniteLogo} alt="Logo" />
    </header>
  );
}
