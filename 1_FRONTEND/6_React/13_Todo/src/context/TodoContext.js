import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[            //This is the actual todo with an id to identify, msg in it and completed or not as we have to strike-through it on complete
        {
            id:1,
            todo: "Todo msg",
            completed: false,
        }
    ],

    // various function that will be needed
    addTodo: (todo)=>{},           
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
})

export const TodoProvider = TodoContext.Provider  //provider

export default function useTodo(){         //custom hook
    return useContext(TodoContext);
}