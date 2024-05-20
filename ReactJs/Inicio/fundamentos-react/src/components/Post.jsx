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
// setComments : função para alterar a lista de comentarios --> ele atualiza a variavel e rederiza a tela
  ]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  locale: ptBR,
  });
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    console.log(event.target)// retorna o gatilho que chamou o evento no caso o envio do formulario 


    console.log(event.target.comment) //acessando o elemento do formulario chamado comment name="comment"
    console.log(event.target.comment.va) // name="comment"
    event.preventDefault()// por padrão quando envia ele redireciona para outra pagina para tirar isso usamos esse comando --> não dar erro
    console.log("enviando um comentario");
    // comments.push(3); //metodo para adicionar comentario "3 " na lista de comentarios --> ineficiente pois não renderiza a tela apos a operação
    setComments([...comments, newCommentText]);// faço que comments = a uma lista com todos os elementos da lista comments + novo comentario
    // setComments([ 1, 2,3]);// faço que comments = [1,2,3]
    setNewCommentText('');
    // event.target.comment.value = "";
    console.log(comments);

  }
  function handleNewCommentInvalid(){
    console.log(event)
    event.target.setCustomValidity("Esse campo é obrigatório")
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
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }
  function deleteComment(commentToDelete) {

    console.log(`Deletar comentário ${commentToDelete}`)
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);// imutabilidade -> as variaveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
  }

  console.log(`Estou sendo renderizado de novo pelo fato de mudarmos a variavel newCommentText: ${newCommentText}`)

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
{/* onClick - para botão */}
      <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required//validação do proprio html
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" >Publicar</button> 
          {/* <button type="submit" disabled={newCommentText.length==0}>Publicar</button>  */}
          {/* disabled={newCommentText.length==0}  -> enquanto o usuário não escrever nada na caixa de texto o usuário não pode pressionar o botão */}
        </footer>
      </form>

      <div className={styles.commentList}>
      {comments.map(comment => {
          return (
            <Comment
              key={comment}
              // na hora de renderizar o componente ele só compara a lista antiga e nova e renderiza os componentes novos
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
