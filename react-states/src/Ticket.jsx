
import Ticketnumber from "./Ticketnumber";

export default function Ticket({ ticket }) {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      {ticket.map((num, index) => (
        <Ticketnumber key={index} num={num} />
      ))}
    </div>
  );
}
