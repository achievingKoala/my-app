import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import TodoList from './ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [num, setNum] = useState(100);
  const [text, setText] = useState('vvv');

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const checkInput = (e) => {
    console.log('------');
    setText(e.target.value)
  }

  return (
    <div>
        <h4>{num}</h4>
        <h4>{text}</h4>
        <button onClick ={ () => setNum(num + 1)}>+</button>
        <button onClick ={ () => setNum(num - 1)}>-</button>
        <input  onChange = {(e) => checkInput(e)}></input>
        <div contentEditable="true"  >
            {text}            
        </div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDo;
