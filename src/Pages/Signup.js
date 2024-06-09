import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../styles/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", {
        firstName,
        lastName,
        email,
        password,
        phoneNo
      });

      if (res.data === "exist") {
        setErrorMessage("User already exists");
      } else if (res.data === "notexist") {
        setSuccessMessage("Signup successful! Redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Phone Number" />
        <input type="submit" value="Signup" />
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Signup;
