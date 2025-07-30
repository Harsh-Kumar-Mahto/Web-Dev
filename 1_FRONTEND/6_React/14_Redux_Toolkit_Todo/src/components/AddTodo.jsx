import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === '') return
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className='flex items-center space-x-3 mt-8 p-4 bg-gray-700 rounded-lg shadow-md border border-gray-600'>
            <input
                type="text"
                className='flex-1 p-3 bg-gray-600 text-white placeholder-gray-400 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                className='px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo