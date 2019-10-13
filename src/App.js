import React from 'react';
import AddToDo from './components/AddToDo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <div className="App">
      <AddToDo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
