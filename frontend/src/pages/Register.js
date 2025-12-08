import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/register", { name, email, password });
    if (res.data) navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-success w-100">Register</button>
      </form>
      <p className="mt-3">
        Already have an account? <a href="/">Login</a>
      </p>

    </div>
  );
}