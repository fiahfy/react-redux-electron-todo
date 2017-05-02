export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function createTodo(todo) {
  const newTodo = Object.assign({}, todo);
  newTodo.id = (new Date()).getTime();
  return {
    type: CREATE_TODO,
    todo: newTodo,
  };
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo,
  };
}
