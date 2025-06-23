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
import Tareasuno from './components/Tareasuno';
import Tareasdos from './components/Tareasdos';
import Inputkey from './components/Inputkey';
import Inputsub from './components/Inputsub';
import Counter from './components/Counter';
import Getdata from './components/Getdata';
import Test from './components/Test';
import Todo from './components/Todo';
import Todo2 from './components/Todo2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo2 />
  </React.StrictMode>,
)
