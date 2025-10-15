import { useState } from "react";
import { Tabs } from "./Tabs";
import PasswordGen from "./PasswordGen";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <h1 className="app-heading">React Mini Projects</h1>

        <div className="section-card">
          <h2 className="section-title">Tabs Component</h2>
          <Tabs />
        </div>

        <div className="section-card">
          <h2 className="section-title"> Password Generator</h2>
          <PasswordGen />
        </div>
      </div>
    </>
  );
}

export default App;
