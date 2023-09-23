import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";


function Register() {

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response) {
        navigate("/");
      }
    } catch (err) {
      setError("Could not complete registration. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {["firstName", "lastName", "email", "username", "password"].map(
          (field, index) => (
            <label key={index} className="register-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                className="register-inputs"
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          )
        )}
        <button type="submit" className="simple-button">
          Submit
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Register;
