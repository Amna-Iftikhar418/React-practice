
export default function Ticketnumber({ num }) {
  return (
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
        background: "linear-gradient(145deg, #6a11cb, #2575fc)",
        padding: "0.8rem 1.2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        textShadow: "0 0 8px rgba(255,255,255,0.5)"
      }}
    >
      {num}
    </span>
  );
}
