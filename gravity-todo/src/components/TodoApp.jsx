import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function TodoApp() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const rawTodos = localStorage.getItem('todos');
    console.log('storage data::', rawTodos);
    if (rawTodos) {
      try {
        setTodos(JSON.parse(rawTodos));
      } catch (err) {
        alert('Something went wrong!');
        console.log(err);
      }
    }
  }, []);

  const handleAdd = () => {
    if (!todo?.trim()) {
      alert('Kindly enter a task before you add it');
    }
    const paylod = {
      id: Date.now(),
      todo,
      completed: false,
    };
    const rawTodos = localStorage.getItem('todos');
    if (rawTodos) {
      try {
        const todos = JSON.parse(rawTodos);
        todos.push(paylod);
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodos(todos);
      } catch (err) {
        alert('Something went wrong!');
        console.log(err);
      }
    } else {
      localStorage.setItem('todos', JSON.stringify([paylod]));
      setTodos([paylod]);
    }
    setTodo('');
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Todo List</h1>
          </div>
          <div className="card-body">
            <div className="create-todo">
              <div className="card">
                <div className="card-body d-flex flex-column justify-content-center border">
                  <div className="w-100">
                    <input
                      type="text"
                      className="bottom-border-input w-100"
                      placeholder="What would you like to do?"
                      name="todo"
                      value={todo}
                      onChange={e => setTodo(e.target.value)}
                    />
                  </div>
                  <div className="w-100 mt-2 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg w-25"
                      onClick={handleAdd}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-todo">
              <div className="card-body d-flex flex-column mt-2 justify-content-center border">
                <TodoList todos={todos} setTodos={setTodos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
