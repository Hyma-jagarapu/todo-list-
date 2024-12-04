import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./style.css";

function App() {
  // State to store the todo list
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Handle input changes
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo(""); // Clear input field after adding todo
    }
  };

  // Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>React To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Task</button>

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;