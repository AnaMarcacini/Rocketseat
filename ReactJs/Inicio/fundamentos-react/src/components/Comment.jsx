import styles from './Comment.module.css';
import { useState } from "react";

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0); // iniciando o estado de likes como zero

  function handleDeleteComment() {
    onDeleteComment(content);
    console.log("deletar")
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
      {/* obs se eu colocar apenas  
        <Avatar hasBorder src="https://github.com/diego3g.png" alt="" /> 
      o valor hasBorder fica = true 
      (se eu colocar nada ele chega como o valor definido como padrão no componente (no caso true) )*/ }

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            {/* CUIDADO
          <button onClick={handleLikeComment}> -----> passando de parametro uma função --> tudo executa normalmente
          <button onClick={handleLikeComment()}> -----> passando de parametro a execução de uma função --> isso faz com que o codigo execute imediatamente ao ler o codigo sem esperar o click no botão 
                                                                                  |--> loop infinito 
          <button onClick={ setLikeCount(likeCount + 1)}>   --> passa a execução de uma função --> dá loop infinito e gera uma serie de erros
          <button onClick={() => setLikeCount(likeCount + 1)}> --> criando uma arrow function resolve o problema   ||| isso daqui :() => setLikeCount(likeCount + 1) se torna uma função que internamente possui uma execução de uma função

          DICA 
            CRIAR SEMPRE UMA FUNÇÃO DE HANDLE_X NO ONCLICK --> CODIGO MAIS LEGIVEL E MENOR MARGEM PARA ERROS  

           */}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
