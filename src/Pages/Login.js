import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Pages/UserContext";
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password
      });

      if (res.status === 200) {
        setUser(res.data.user);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
