import { useState } from "react";
export default function Input(){
   const [inputValue, setInputValue] = useState("");
const [submittedMessage, setSubmittedMessage] = useState("");

    const handleSubmit = () => {
  setSubmittedMessage(inputValue);
};
const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

   return (
  <div>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
    />
    <button onClick={handleSubmit}>Submit</button>
    <p>{submittedMessage}</p>
  </div>
);

}