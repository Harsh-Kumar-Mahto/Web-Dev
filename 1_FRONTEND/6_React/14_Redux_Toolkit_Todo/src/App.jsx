import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      {/* Overall application container with a dark themed background and centered content */}
      <div className="w-screen h-screen bg-gradient-to-br from-gray-400 to-black flex items-center justify-center">
        {/* Main content area, styled like a distinct dark card */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-[80%] h-[80%] border border-gray-700">
          <h1 className="text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
            Todo List
          </h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  )
}

export default App