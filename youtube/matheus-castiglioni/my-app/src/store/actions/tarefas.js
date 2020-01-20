export const handleChange = ({target}) => {
  return {
    type: "CHANGED_INPUT_VALUE",
    tarefa: target.value
  };
}

export const handleAddItem = () => {
  return {
    type: "ADD_ITEM"
  }
}

export const handleUpdateItem = (todo, index) => {
  return {
    type: "UPDATE_ITEM",
    tarefa: todo,
    update: index
  }
}

export const handleRemoveItem = todo => {
  return {
    type: "REMOVE_ITEM",
    tarefa: todo
  }
}