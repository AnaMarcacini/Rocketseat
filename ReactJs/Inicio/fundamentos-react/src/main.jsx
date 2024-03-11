import React from 'react' /// core do react
import ReactDOM from 'react-dom/client'// interação do react com a dom Document Object Model || ambiente web
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( //renderiza a div root
//Componetes react:
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
