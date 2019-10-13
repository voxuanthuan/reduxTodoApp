import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

function Todo({ toggleTodo, todo }) {
  return <li onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo && todo.completed ? 'line-through' : 'none' }}>
    {todo.content}
  </li>
}

export default connect(null, { toggleTodo })(Todo);