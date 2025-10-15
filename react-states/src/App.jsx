import { useState } from "react";
import Todo from "./Todo";
import Counter from "./Counter";
import Input from "./Input";
import Like from "./Like";
import Login from "./login";
import Luddo from "./Luddo";
import Lotry from "./Lotry";
import Forms from "./Forms";
import UseEffect from "./UseEffect";
import "./App.css";

function App() {
  function sum(arr) {
    return arr.reduce((total, val) => total + val, 0);
  }

  const [count, setCount] = useState(0);

  let winingCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.heading}>React Practice Projects</h1>
        <p style={styles.subText}>Collection of your React component exercises </p>
      </header>

      <div style={styles.grid}>
        <Section title="useEffect Example">
          <UseEffect />
        </Section>

        <Section title="Counter">
          <Counter />
        </Section>

        <Section title="Forms">
          <Forms />
        </Section>

        <Section title="Lottery">
         
          <Lotry />
         
        </Section>

        <Section title="Todo App">
          <Todo />
        </Section>

        <Section title="Luddo Game">
          <Luddo />
        </Section>

        <Section title="Form">
          <Login />
        </Section>

        <Section title="Like Button">
          <Like />
        </Section>

        <Section title="Input Practice">
          <Input />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {

   page: {
  minHeight: "100vh",
 
  background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
  color: "white",
  padding: "50px 30px",
  fontFamily: "'Poppins', sans-serif",
},

  
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "8px",
    color: "#fff",
    textShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
  subText: {
    color: "#b0c4de",
    fontSize: "1.1rem",
  },
  grid: {
    display: "grid",
 
    gap: "35px",
    color:"white",
    margin:"0 auto"
  },
  card: {
    
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(6px)",
    transition: "all 0.3s ease",
  },
  title: {
    fontSize: "1.4rem",
    color: "#fdd835",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
};

export default App;
