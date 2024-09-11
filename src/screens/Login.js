import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send login request to server
    // const response = await fetch("http://localhost:5000/api/loginuser",
    const response = await fetch("https://food-o9yj.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password
      })
    });

    const json = await response.json();
    console.log(json);

    // Handle response based on success or failure
    if (json.success) {
      localStorage.setItem("userEmail", credential.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    } else {
      // Show error message if login fails
      alert("Invalid email or password");
    }
  };

  const onChange = (ev) => {
    setCredential({ ...credential, [ev.target.name]: ev.target.value });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credential.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credential.password} onChange={onChange} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 btn btn-danger">I'm New User</Link>
        </form>
      </div>
    </div>
  )
}
