import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Form from './components/Form';
import Series from './components/Series';
import Tareas from './components/Tareas';
import Tareasdos from './components/Tareasdos';
import Inputkey from './components/Inputkey';
import Inputsub from './components/Inputsub';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tareasdos  />
  </React.StrictMode>,
)
