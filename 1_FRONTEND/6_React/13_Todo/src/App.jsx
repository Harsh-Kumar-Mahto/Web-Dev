import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from './components/TodoForm'
import TodoItem from "./components/TodoItems";

function App() {
  
  const [todos,setTodos] = useState([]);    //this array contains all props of todo

  function addTodo(todo){
    setTodos((prev) => [{id:Date.now(),...todo},...prev])    //id autogenerated,
  }

  function updateTodo(id,todo){
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))   //find todo of required id and then edit todomsg in it else return prev
  }

  function deleteTodo(id){
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))   //filter is to filter out required part which are the todos other that the given id todo
  }

  function toggleComplete(id){
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo,completed : !todo.completed} : todo))   //find the todo with required id, and in the destructured todo,overrite the completed field else leave unchanged
  }

  useEffect(()=>{    //For just the initial start of page to load the todos in the local storage therefore no dependencies as we don't want it to change again and again 
    const todos = JSON.parse(localStorage.getItem("todos"))   //local storage return string so convert to json
    if(todos && todos.length){   //if local storage has todos, add them
      setTodos(todos)
    }
  },[])

  useEffect(() => {        //This is to add values in the local storage in string format as per the changes, we made this separate as we don't want to run getItem again and again  //used local storage so that our previous todos don't vanish on refresh
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,toggleComplete,deleteTodo,updateTodo,addTodo}}>    {/* provider and values it is providing */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
