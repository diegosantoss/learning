const INITIAL_STATE = {
  todo: ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"],
  tarefa: '',
  update: ''
}

const tarefas = (state = INITIAL_STATE, action) => {
  if(action.type === "CHANGED_INPUT_VALUE"){
    return { ...state, tarefa: action.tarefa}
  } 

  if(action.type === "ADD_ITEM"){
    let { todo, tarefa, update } = state;

    if(!tarefa){
      return {...state};
    }

    if(todo[update]){ todo[update] = tarefa; } 
    else { todo.push(tarefa) }

    return { ...state, todo, tarefa: '', update: ''}
  }

  if(action.type === "UPDATE_ITEM"){
    return { ...state, tarefa: action.tarefa, update: action.update}
  }

  if(action.type === "REMOVE_ITEM"){
    let { todo } = state;
    let tarefa = action.tarefa;

    todo = todo.filter(td => td !== tarefa);

    return { ...state, todo }
  }

  return state;
}

export default tarefas;