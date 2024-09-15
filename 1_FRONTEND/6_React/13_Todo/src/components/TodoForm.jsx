import React, { useState } from 'react'
import useTodo from '../context/TodoContext';

function TodoForm() {
   
    const [todo,setTodo] = useState('')   //for a single todo at a time(here todo refers just to the msg)

    const {addTodo} = useTodo()     //using context

    const add = (e) => {
        e.preventDefault()    //stopping default function of button
        if(!todo) return      //if todo is empty we don't have to do anything
        addTodo({todo,completed:false})   //this is to add a complete todo, id is given as date.now in App.jsx,todo is the msg and completed is initially false
        setTodo('')       //once a todo is generated, again set the msg in todo to empty
    }

    return (
        <form onSubmit={add} className="flex">   //function call on submit
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}       //this is the msg in the todo
                onChange={(e) => setTodo(e.target.value)}    //update value on changes
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;