import { FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR } from '../actions/action';
import {ADD_TODO, REMOVE_TODO} from '../actions/addTodo';
import uuidv4  from 'uuid/v4';

const initialState = {
  pending: false,
  items: [],
  error: null,
  data: []
}


const showTodos = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PENDING: 
      return {
        ...state,
        pending: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case ADD_TODO: 
      const newData = [];
      const newObj = {};
      newObj.id = uuidv4();
      newObj.name = action.payload;
      newData.push(newObj);
      return {
        ...state,
        data: [...state.data, ...newData]
      }
    case REMOVE_TODO:
     const delItem = action.id;
     return {
       items: [...state.items.filter(todo => todo.id !== action.id)],
       data: [...state.data.filter(todo => todo.id !== action.id)]
     }
    default:
      return state;
  }
}

export default showTodos;