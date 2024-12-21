

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const addToDo = (data) => ({
  type: ADD_TODO,
  payload: data
});

const removeToDo = id => ({ 
  type: REMOVE_TODO,
  id
});

export { ADD_TODO, addToDo, REMOVE_TODO, removeToDo }