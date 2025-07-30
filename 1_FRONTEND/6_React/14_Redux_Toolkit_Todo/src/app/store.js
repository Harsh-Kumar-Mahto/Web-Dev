// This file is to craete a store for the application in which we can store data
// and manage the state of the application using Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";  //importing the todo slice reducer


export const store = configureStore({
    reducer:  todoReducer ,   // if there were multiple slices, we would add them here as well
    // the name of the slice will be used to access the state in the components
});