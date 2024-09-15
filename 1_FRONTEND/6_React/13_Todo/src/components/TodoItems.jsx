import React, { useState } from 'react'
import useTodo from '../context/TodoContext';

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)    //ability to edit
    const [todoMsg, setTodoMsg] = useState(todo.todo)         //to change msg if editable
    const {toggleComplete,updateTodo,deleteTodo} = useTodo()     //completed or not

    function editTodo(){       //local function that will use the context function
        updateTodo(todo.id,{...todo,todo:todoMsg})   //since todo is passed in the top as parameter we can use it, id will remain same,then {...} expands the object and after comma we can overrite a required field
        setIsTodoEditable(false)    //once completed set false
    }

    function toggleCompleted(){  //local function
        toggleComplete(todo.id)   //function from context
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"    //this part is responisble for different UI for completed and non completed todo
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}   //for the checkbox
                onChange={toggleCompleted} //to toggle the checkbox
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}   //strike0through on complete
                value={todoMsg}      //value governed by todomsg
                onChange={(e) => setTodoMsg(e.target.value)}   //onchange update the msg
                readOnly={!isTodoEditable}          //governs if editable or not
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;