import PostPrincipal from './Post' // Default Exports 
import {Post} from "./components/Post" 
import { Post2 } from './Post2' // Named Exports 
import { Header } from './components/Header';
// todos os componetnes possuem extenção jsx = JavaScript + XML // tem html interno

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';


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
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <PostPrincipal/>
          <Post2 autor = "Ana" conteudo ="Escrever 'lorem ' no vcode gera o texto automatico Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta temporibus deserunt soluta magni iusto. Nobis nam odit culpa, nihil voluptatum quaerat reprehenderit sit ratione reiciendis maxime vero, esse neque. "/>
          <Post2 
            autor = "Ana2" 
            conteudo ="Escrever 'lorem ' no vcode gera o texto automatico Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta temporibus deserunt soluta magni iusto. Nobis nam odit culpa, nihil voluptatum quaerat reprehenderit sit ratione reiciendis maxime vero, esse neque. "/>
        </main>

      </div>

    </div>
  )
}
