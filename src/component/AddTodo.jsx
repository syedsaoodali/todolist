import React, { useState } from 'react';
import TodoForm from './TodoForm';

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addOrUpdateTodo = (todo) => {
    if (currentTodo) {
      
      setTodos(todos.map((e) => (e.id === currentTodo.id ? { ...e, ...todo } : e)));
      setCurrentTodo(null); 
    } else {
      setTodos([...todos, { ...todo, id: Date.now() }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
  };

  const editTodo = (todo) => {
    setCurrentTodo(todo); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <div className="flex space-x-8"> 
        <div className="w-1/3">
          <TodoForm onSubmit={addOrUpdateTodo} initialData={currentTodo} />
        </div>
        <div className="w-2/3">
          {todos.length ? (
            todos.map((todo) => (
              <div key={todo.id} className="flex justify-center mb-4">
                <div className="block max-w-[18rem] rounded-lg bg-[#332D2D] text-white shadow-secondary-1">
                  <div className="border-b-2 border-black/20 px-6 py-3">
                    <h5 className="text-xl font-medium leading-tight">Todo Task</h5>
                  </div>
                  <div className="p-6">
                    <h6 className="text-lg font-bold">Title: {todo.title}</h6>
                    <p className="text-base">Description: {todo.description}</p>
                    <span className={`text-sm ${todo.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                      Status: {todo.status}
                    </span>
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={() => editTodo(todo)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No todos yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
