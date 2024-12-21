import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import {removeToDo} from './actions/addTodo';

const TodoItems = ({ todos, dispatch }) => {
  return (
    <ul>
        {
          todos.map((todo, index) => 
          <div  className="closeMarkWrapper">
            <li key={todo.id}
              className = "todoListItem" 
              > 
                {todo.name} 
            </li>
            <span 
              className="closeMark" 
              onClick={() => dispatch(removeToDo(todo.id))}>
                X  
            </span>
          </div>
          )
        }
    </ul>
  );
}

export default connect()(TodoItems);