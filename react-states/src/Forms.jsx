
import { useState } from "react";
import "./forms.css";

export default function Forms() {
  const [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    email: "",
    rate: "",
  });

  const [submit, setSubmit] = useState(null);
  const [error, setError] = useState("");

  function handleInputValue(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function submitt(event) {
    event.preventDefault();
    const { userName, remarks, email, rate } = formData;

    if (!userName.trim() || !remarks.trim() || !email.trim() || !rate.trim()) {
      setError("⚠ Please fill all fields");
      setSubmit(null);
      return;
    }

    setError("");
    setSubmit({ ...formData });
    setFormData({ userName: "", remarks: "", email: "", rate: "" });
  }

  return (
    <div className="form-wrapper">
      <form className="form-card" onSubmit={submitt}>
        <h1 className="form-title">Customer Feedback</h1>
        <p   className="form-subtitle">Your opinion helps us improve.</p>

   
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={formData.userName}
            onChange={handleInputValue}
            name="userName"
          />
        </div>

     
        <div className="form-group">
          <label htmlFor="remarks">Comments</label>
          <textarea
            placeholder="Share your thoughts..."
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleInputValue}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            onChange={handleInputValue}
            name="email"
          />
        </div>

     
        <div className="form-group">
          <label htmlFor="rate">Rate us (1-5)</label>
          <input
            type="number"
            placeholder="Enter rating"
            id="rate"
            value={formData.rate}
            onChange={handleInputValue}
            name="rate"
            min={1}
            max={5}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>

  
        {error && <p className="error-message">{error}</p>}

       
        {submit && (
          <div className="result-section">
            <h2>Submitted Details</h2>
            <ul>
              <li><strong>Username:</strong> {submit.userName}</li>
              <li><strong>Remarks:</strong> {submit.remarks}</li>
              <li><strong>Email:</strong> {submit.email}</li>
              <li><strong>Rate:</strong> {submit.rate}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
