import { useState } from "react";

export function TodoList() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build project", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  const toggle = (id) => {
    setTodo(
      todo.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deletetodo=(id)=>{
    setTodo(todo.filter(t=>t.id!==id))

  }

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h2>Todo List</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={addTodo}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>
      {todo.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px",
            margin: "8px 0",
            backgroundColor: todo.completed ? "#f0f0f0" : "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggle(todo.id)}
            style={{ marginRight: "10px" }}
          />

          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#999" : "#000",
            }}
          >
            {todo.text}
          </span>
          <button onClick={()=>deletetodo(todo.id)}  style={{
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
            Delete
          </button>
          
        </div>
      ))}
      <p style={{ marginTop: '15px', color: '#666' }}>
        {todo.filter(t => !t.completed).length} of {todo.length} remaining
      </p>
      
    </>
  );
}
