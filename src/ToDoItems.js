import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
