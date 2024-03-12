import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}


// Outras maneiras de fazer o valor padrão 

// import styles from './Avatar.module.css'

// export function Avatar(props) {
//   const hasBorder = props.hasBorder != false;
//   return (
//     <img
//       className={hasBorder ? styles.avatarWithBorder : styles.avatar}
//       src={src}
//     />
//   );
// }

// conceito de desestruturação java script
// se eu nomino o seguinte objeto dessa maneira
          // const user = {name:"diego"}

// consigo acessar o nome do objeto da seguinte maneira

          // const {name} = user;

