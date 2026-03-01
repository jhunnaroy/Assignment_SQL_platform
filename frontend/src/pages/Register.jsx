import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name:"", email:"", password:"" });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", data);
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange}/>
          <input name="email" placeholder="Email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;