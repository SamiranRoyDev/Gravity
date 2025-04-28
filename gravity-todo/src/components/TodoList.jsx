import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos,setTodos}) {
  
  const handleComplete = (id) => {
    try {
      const updateTodoIndex = todos.findIndex((todo) => todo.id === id);
      const todo = todos[updateTodoIndex];
      const copyTodos = [...todos];
  
      const updatedTodo = {
        ...todo,
        completed: !todo.completed
      };
  
      copyTodos[updateTodoIndex] = updatedTodo;
      localStorage.setItem("todos", JSON.stringify(copyTodos));
      setTodos(copyTodos);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };
  

  const handleDelete = (id) => {
    try {
      const newTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  }
  return (
    <>
      {todos.length > 0 ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item.todo}
            completed={item.completed}
            onComplete={() => handleComplete(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))
      ) : (
        <p>No task available</p>
      )}
    </>
  )
}

export default TodoList