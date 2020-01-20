import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TarefaActions from '../../store/actions/tarefas'

const Tarefas = ({ tarefas, handleChange, handleAddItem, handleUpdateItem, handleRemoveItem }) => (
  <>
    <h1>Tarefas</h1>
    <ul>
      {tarefas.todo.map( (td, index) => (
        <li key={index}>{td} 
          <button onClick={() => handleUpdateItem(td, index)}>Edit</button>
          <button onClick={() => handleRemoveItem(td)}>Delete</button>
        </li>
      ))}
    </ul>
  </>
)

const mapStateToProps = state => ({
  tarefas: state.tarefas,
});

const mapDispatchToProps = dispatch => bindActionCreators(TarefaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas)