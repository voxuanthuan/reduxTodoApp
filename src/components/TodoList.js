import React from 'react';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selectors';
import { connect } from 'react-redux';


const TodoList = ({ todos }) => {
  return <div>
    <ul>
      {
        todos && todos.length ?
          todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })
          : 'No todo'
      }
    </ul>
  </div>
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  console.log('todos', todos);
  return { todos }
}


export default connect(mapStateToProps, null)(TodoList);