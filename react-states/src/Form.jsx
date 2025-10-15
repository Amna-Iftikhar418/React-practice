
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });


  const [submittedData, setSubmittedData] = useState(null);


  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormData((currentData) => ({ ...currentData, [fieldName]: fieldValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = formData.fullName.trim();
    const userName = formData.userName.trim();

    if (!fullName || !userName) {
      setError("Please fill in both fields.");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData({ fullName, userName });

    setFormData({ fullName: "", userName: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Name:</label>
        <input
          type="text"
          placeholder="enter full name"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName"
        />

        <label htmlFor="userName">User:</label>
        <input
          type="text"
          placeholder="enter user name"
          id="userName"
          value={formData.userName}
          onChange={handleInputChange}
          name="userName"
        />

        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {submittedData && (
        <div style={{ marginTop: 12 }}>
          <h3>Answer</h3>
          <p>Name: {submittedData.fullName}</p>
          <p>User: {submittedData.userName}</p>
        </div>
      )}
    </>
  );
}