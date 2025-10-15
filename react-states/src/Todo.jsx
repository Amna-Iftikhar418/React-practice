
import { useState } from "react";
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function addTask() {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  }
  const deleteAllTasks = () => setTasks([]);

  function uppercaseAll() {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        text: task.text.toUpperCase(),
      }))
    );
  }

  function markasdone(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: true } : task
      )
    );
  }

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      width: "400px",
      margin: "60px auto",
      padding: "25px 30px",
      fontFamily: "'Segoe UI', sans-serif",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },
    heading: {
      color: "#1976d2",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "22px",
      fontWeight: "600",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      background: "#f4f6f8",
      border: "1px solid #d0d7de",
      height: "45px",
      padding: "0 12px",
      fontSize: "16px",
      borderRadius: "8px",
      outline: "none",
      transition: "border 0.2s ease",
    },
    inputFocus: {
      border: "1px solid #1976d2",
    },
    addButton: {
      background: "linear-gradient(135deg, #4cafef, #1976d2)",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      fontSize: "24px",
      color: "white",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(25, 118, 210, 0.3)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    addButtonHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 14px rgba(25, 118, 210, 0.4)",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      background: "#f9f9f9",
      border: "1px solid #e0e0e0",
      padding: "10px 14px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
      transition: "background 0.2s ease",
    },
    listItemHover: {
      background: "#f1faff",
    },
    taskText: (done) => ({
      textDecoration: done ? "line-through" : "none",
      color: done ? "#9e9e9e" : "#333",
      fontWeight: done ? "400" : "500",
    }),
    smallButton: {
      background: "#43a047",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background 0.2s ease",
    },
    smallButtonHover: {
      background: "#388e3c",
    },
    deleteButton: {
      backgroundColor: "#d32f2f",
      color: "white",
      border: "none",
      padding: "10px 16px",
      fontSize: "15px",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "15px",
      transition: "background 0.2s ease",
    },
    deleteButtonHover: {
      backgroundColor: "#b71c1c",
    },
    upperButton: {
      backgroundColor: "#f57c00",
      color: "white",
      border: "none",
      padding: "10px 16px",
      fontSize: "15px",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "10px",
      marginLeft: "10px",
      transition: "background 0.2s ease",
    },
    upperButtonHover: {
      backgroundColor: "#ef6c00",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Manager</h1>
       <h4>Total tasks:{tasks.length}</h4><br />

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button style={styles.addButton} onClick={addTask}>
          +
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span style={styles.taskText(todo.isDone)}>{todo.text}</span>
            {!todo.isDone && (
              <button
                style={styles.smallButton}
                onClick={() => markasdone(todo.id)}
              >
                Done
              </button>
            )}
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div>
          <button style={styles.deleteButton} onClick={deleteAllTasks}>
            Delete All
          </button>
          <button style={styles.upperButton} onClick={uppercaseAll}>
            Uppercase All
          </button>
        </div>
      )}
    </div>
  );
}
