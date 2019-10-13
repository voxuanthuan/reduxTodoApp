import { VISIBILITY_FILTERS } from '../constants';

export const getTodoState = (store) => store.todos;

export const getTodoList = store =>
  getTodoState(store) ? getTodoState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

//Select from store combining information from multiple reducers

export const getTodos = (store) =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETED:
      return allTodos.filter(todo => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
}