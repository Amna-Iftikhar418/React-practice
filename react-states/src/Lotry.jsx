import { useState } from "react";

export default function Lottery() {
  const [ticket, setTicket] = useState([0, 0, 0]);

  function generate(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    setTicket(arr);
  }

  function sums(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
  }

  let isAdd = sums(ticket) === 15;

  return (
    <div
      style={{ marginTop: "3rem", textAlign: "center", fontFamily: "'Segoe UI', sans-serif", background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        padding: "2rem",
        borderRadius: "15px",
        width: "300px",
        margin: "5rem auto",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
      }}
    >
    
      <h1
        style={{
          marginBottom: "1rem",
          color: "#ffd700",
          textShadow: "0 0 4px rgba(255,215,0,0.7)"
        }}
      >
        <i style={{ color: "yellow" }} className="fa-solid fa-dice-d20"></i>{" "}
        Lottery Game{" "}
        <i style={{ color: "yellow" }} className="fa-solid fa-dice-d20"></i>
      </h1>

   {isAdd && (
        <div
          style={{
            color: "#00ff88",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            animation: "flash 1s infinite alternate",
          }}
        >
           You won the game! 
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          border: "2px solid #ffd700",
          borderRadius: "10px",
          padding: "1rem",
          backgroundColor: "rgba(255,255,255,0.05)"
        }}
      >
        {ticket.map((num, index) => (
          <span
            key={index}
            style={{
              fontSize: "2.5rem",
              color: "#00ffcc",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              background: "rgba(0,255,204,0.1)",
              boxShadow: "0 0 10px rgba(0,255,204,0.7)"
            }}
          >
            {num}
          </span>
        ))}
      </div>

       <br />

     <button
        onClick={() => generate(3)}
        style={{
          background: "linear-gradient(90deg, #ff512f, #dd2476)",
          border: "none",
          padding: "0.7rem 1.5rem",
          borderRadius: "25px",
          color: "white",
          fontSize: "1.1rem",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.4)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        }}
      >
        <i style={{ color: "white" }} className="fa-solid fa-dice-d6"></i>{" "}
        Generate
      </button>
 <style>
        {`
          @keyframes flash {
            from { opacity: 1; }
            to { opacity: 0.4; }
          }
        `}
      </style>
    </div>
  );
}
