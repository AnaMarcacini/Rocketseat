import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

// https://date-fns.org/

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!👏👏'
// função para alterar a lista de comentarios --> ele atualiza a variavel e rederiza a tela
  ]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
  });

  const [newCommentText, setNewCommentText] = useState('');

  function handleCrateNewComment() {
    console.log(event.target)// retorna o gatilho que chamou o evento no caso o envio do formulario 


    console.log(event.target.comment) //acessando o elemento do formulario chamado comment name="comment"
    console.log(event.target.comment.va) // name="comment"
    event.preventDefault()// por padrão quando envia ele redireciona para outra pagina para tirar isso usamos esse comando --> não dar erro
    console.log("enviando um comentario");
    // comments.push(3); //metodo para adicionar comentario "3 " na lista de comentarios --> ineficiente pois não renderiza a tela apos a operação
    setComments([...comments, newCommentText]);// faço que comments = a uma lista com todos os elementos da lista comments + novo comentario
    // setComments([ 1, 2,3]);// faço que comments = [1,2,3]
    setNewCommentText('');
    console.log(comments);

  }

  
  const publishedDateFormattedOld = new Intl.DateTimeFormat('pt-BR',{
    day:'2-digit',
    month:'long',
    hour: '2-digit',
    minute:'2-digit'
  }).format(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true 
    // add suffix - adiciona prefixo em portugues (sufixo em ingles) há x dias cerca de 8 horas etc
  });
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          {/* {publishedAt.toString()}  /* não tem como printar a data sem trasforma-la em string*/}
          {/* veja mais https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */}
          {/* {publishedDateFormattedOld} */}
          {/* {publishedDateFormatted} */}
          {publishedDateRelativeToNow}

          </time>
        {/* se passar o mouse em cima aparece o title  */}

      </header>

      <div className={styles.content}>
        {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
{/* onClick - para botão */}
      <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      {comments.map(comment => {
          return (
            <Comment
              // key={comment}
              content={comment}
              // onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
