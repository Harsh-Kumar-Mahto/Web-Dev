// This is a Redux slice for managing todo items in the application.
// It allows us to define the initial state, actions, and reducers for todo management.
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: nanoid(), text: 'Hello guys', status: true}], // Array to hold todo items
};

export const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        status: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    // The comment was slightly misleading before. It only uses 'id'.
    todoToggle: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = !todo.status;
      }
    },
  },
});

// Export actions and the reducer
export const { addTodo, removeTodo, updateTodo, todoToggle } = todoSlice.actions;
export default todoSlice.reducer;