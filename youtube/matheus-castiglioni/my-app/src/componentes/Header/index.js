import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/tarefas">Tarefas</Link></li>
    <li><Link to="/adicionar-tarefa">Adicionar Tarefa</Link></li>
  </ul>  
);

export default Header;