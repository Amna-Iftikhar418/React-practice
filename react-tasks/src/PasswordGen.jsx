import { useState } from "react";
import "./PasswordGen.css";

const SC = "!@#$%^&*().";
const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC = "abcdefghijklmnopqrstuvwxyz";
const NC = "0123456789";

export default function PasswordGen() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [fpass, setfpass] = useState("");

  let createPassword = () => {
    let charSet = "";
    let final = "";

    if (upperCase) charSet += UC;
    if (lowerCase) charSet += LC;
    if (numbers) charSet += NC;
    if (symbols) charSet += SC;

    if (charSet === "") {
      alert("nothing selected");
      return;
    }

    for (let i = 0; i < passwordLength; i++) {
      final += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setfpass(final);
  };

  return (
    <div className="password-container">
      <h2>Password Generator</h2>

      <div className="output-box">
        <input type="text" value={fpass} readOnly />
        <button onClick={() => navigator.clipboard.writeText(fpass)}>Copy</button>
      </div>

      <div className="option">
        <label>Password Length</label>
        <input
          type="number"
          max={20}
          min={4}
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </div>

      <div className="option">
        <label>Include UpperCase Letters</label>
        <input
          type="checkbox"
          checked={upperCase}
          onChange={() => setUpperCase(!upperCase)}
        />
      </div>

      <div className="option">
        <label>Include LowerCase Letters</label>
        <input
          type="checkbox"
          checked={lowerCase}
          onChange={() => setLowerCase(!lowerCase)}
        />
      </div>

      <div className="option">
        <label>Include Numbers</label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
      </div>

      <div className="option">
        <label>Include Symbols</label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />
      </div>

      <button className="generate-btn" onClick={createPassword}>
        Generate Password
      </button>
    </div>
  );
}
