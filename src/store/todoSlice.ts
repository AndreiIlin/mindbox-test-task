import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    changeTodo: (state, action: PayloadAction<string>) => {
      const currentTodo = state.todos.find(todo => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo?.completed;
      }
    },
  },
});

export const { changeTodo, addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
