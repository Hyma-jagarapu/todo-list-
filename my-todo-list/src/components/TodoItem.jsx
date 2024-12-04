import React from "react";

function TodoItem({ todo, onRemove }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
}

export default TodoItem; 