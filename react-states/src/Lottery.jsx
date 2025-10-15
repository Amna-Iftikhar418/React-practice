
import { useState } from "react";
import Ticket from "./Ticket";

export default function Lottery({ n, winningCondition }) {
  function generateTicket(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  }

  const [ticket, setTicket] = useState(() => generateTicket(n));

  function buyTicket() {
    setTicket(generateTicket(n));
  }

  function sums(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
  }

  let isAdd = winningCondition(ticket)

  return (
    <div
      style={{
        marginTop: "5rem",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        padding: "2rem",
        borderRadius: "20px",
        width: "350px",
        margin: "5rem auto",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        color: "white"
      }}
    >
      <h1
        style={{
          marginBottom: "1rem",
          color: "#FFD700",
          textShadow: "0 0 15px rgba(255,215,0,0.8)",
          fontSize: "2rem",
          fontWeight: "bold"
        }}
      >
        🎰 Lottery Game 🎲
      </h1>

      {isAdd && (
        <div
          style={{
            color: "#00ff88",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            animation: "flash 1s infinite alternate"
          }}
        >
          🎉 You Won the Game! 🎉
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          border: "2px solid rgba(255,255,255,0.3)",
          borderRadius: "15px",
          padding: "1rem",
          background: "rgba(255,255,255,0.05)",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)"
        }}
      >
        <Ticket ticket={ticket} />
      </div>

      <br />

      <button
        onClick={buyTicket}
        style={{
          background: "linear-gradient(90deg, #ff512f, #dd2476)",
          border: "none",
          padding: "0.8rem 1.8rem",
          borderRadius: "30px",
          color: "white",
          fontSize: "1.1rem",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
        }}
      >
        🎟 Buy New Ticket
      </button>
    </div>
  );
}
