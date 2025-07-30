import React, { useState } from 'react' // Import useState
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, todoToggle } from '../features/todo/todoSlice'

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    // State to manage which todo is being edited and its current text
    const [editingTodoId, setEditingTodoId] = useState(null)
    const [editedText, setEditedText] = useState('')

    // Handler for when the "Update" button is clicked
    const handleEditClick = (id, text) => {
        setEditingTodoId(id)
        setEditedText(text)
    }

    // Handler for saving the updated todo
    const handleSaveClick = () => {
        if (editedText.trim() === '') {
            // Optionally show an error or prevent saving empty todo
            alert('Todo cannot be empty!')
            return
        }
        dispatch(updateTodo({ id: editingTodoId, text: editedText.trim() }))
        setEditingTodoId(null) // Exit editing mode
        setEditedText('') // Clear edited text
    }

    // Handler for canceling the update
    const handleCancelClick = () => {
        setEditingTodoId(null) // Exit editing mode
        setEditedText('') // Clear edited text
    }

    return (
        <div className="mt-8 w-full bg-gray-800 rounded-lg shadow-md p-4 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Todos</h2>
            <ul className="divide-y divide-gray-700">
                {todos.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">No todos yet! Add one above.</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between py-3 px-2">
                            <input type="checkbox" onChange={() => dispatch(todoToggle({ id: todo.id, status: todo.status }))} defaultChecked={todo.status} className='mr-2' />
                            {editingTodoId === todo.id ? (
                                // Render input field when in editing mode
                                <div className="flex-1 flex items-center space-x-2 mr-4">
                                    <input
                                        type="text"
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                        className="flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSaveClick();
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={handleSaveClick}
                                        className='px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300'
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelClick}
                                        className='px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300'
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                // Render text and original buttons when not editing
                                <>
                                    <span className="text-gray-200 text-lg flex-1 mr-4">
                                        {todo.text}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleEditClick(todo.id, todo.text)}
                                            className='px-3 py-1 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300'
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                            className='px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Todos