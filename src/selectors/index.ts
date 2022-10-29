import { RootState } from '../store';

export const selectById = (todoId: string) => (state: RootState) => {
  const { todos } = state.todoList;
  return todos.find(({ id }) => id === todoId);
};

export const todos = (state: RootState) => state.todoList.todos;

export const completedTodos = (state: RootState) => state.todoList.todos.filter(({ completed }) => completed);

export const activeTodos = (state: RootState) => state.todoList.todos.filter(({ completed }) => !completed);
