import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (action === "Sign Up") {
      if (!name || !email || !password) {
        alert("Please fill in all fields for Sign Up.");
      } else {
        alert(`Sign Up Successful!\nName: ${name}\nEmail: ${email}`);
      }
    } else {
      if (!email || !password) {
        alert("Please enter Email and Password to Login.");
      } else {
        alert(`Login Successful!\nEmail: ${email}`);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <i className="fa-solid fa-key"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {action === "Sign Up" ? null : (
          <div className="lost-password">
            Forget Password? <span>Click</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit grey" : "submit"}
            onClick={handleSubmit}
          >
            Sign-up
          </div>

          <div
            className={action === "Sign Up" ? "submit grey" : "submit"}
            onClick={handleSubmit}
          >
            Login
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setAction("Sign Up")}>Switch to Sign Up</button>
          <button onClick={() => setAction("Login")}>Switch to Login</button>
        </div>
      </div>
    </div>
  );
}