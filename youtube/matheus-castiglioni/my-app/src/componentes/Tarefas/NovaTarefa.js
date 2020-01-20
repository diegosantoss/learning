import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as TarefaActions from '../../store/actions/tarefas'

const NovaTarefa = ({tarefas, handleChange, handleAddItem}) => (
  <>
    <h1>nova tarefa</h1>
    <input onChange={(e) => handleChange(e)} value={tarefas.tarefa} />
    <button onClick={() => handleAddItem()}>Adicionar</button>
  </>
);

const mapStateToProps = state => ({
  tarefas: state.tarefas
});

const mapDispatchToProps = dispatch => bindActionCreators(TarefaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NovaTarefa);