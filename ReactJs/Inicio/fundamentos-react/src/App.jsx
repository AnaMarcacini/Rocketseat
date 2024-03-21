import PostPrincipal from './Post' // Default Exports 
import {Post} from "./components/Post" 
import { Post2 } from './Post2' // Named Exports 
import { Header } from './components/Header';
// todos os componetnes possuem extenção jsx = JavaScript + XML // tem html interno

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
// json
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2042-03-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [ // vetor de objetos
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-03-03 20:00:00'),
  },
];


// Nunca colocar html no json -> perigo de alguem malicioso colocar typescript e fazer rodar algo malicioso no seu navegador

export function App() {

  return (
    // <h1>Olá Mundo</h1>
    // <Post/>
    // no react ele não deixa ter varios componentes um a baixo do outro se não tiver um elemento por volta deles

    <div>
      <Header/>
      <h1>Olá Mundo</h1>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* {posts.forEach(post =>{ // for each percorre o array porem não tem nenhum retorno por isso não funciona
            <Post/>
          } )} */}
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>

    </div>
  )
}
