import { useState } from "react";

export default function Luddo() {
  const [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});

  const updateBlue = () => {
    setMoves((prevMoves) => ({ ...prevMoves, blue: prevMoves.blue + 1 }));
  };

  const updateRed = () => {
    setMoves((prevMoves) => ({ ...prevMoves, red: prevMoves.red + 1 }));
  };

  const updateYellow = () => {
    setMoves((prevMoves) => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }));
  };

  const updateGreen = () => {
    setMoves((prevMoves) => ({ ...prevMoves, green: prevMoves.green + 1 }));
  };

  return (
    <div style={{color: "white"}}>
      <h1 style={{color:"white"}}>Game Begins</h1><br /><br />
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{color: "white", backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{color: "white", backgroundColor: "red"}} onClick={updateRed}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{color: "black", backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button style={{color: "white", backgroundColor: "green"}} onClick={updateGreen}>+1</button>
      </div>
    </div>
  );
}
