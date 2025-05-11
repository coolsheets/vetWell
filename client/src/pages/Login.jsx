import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/auth", { email, password: pw })
      .then(res => {
        login(res.data.user, res.data.token);
        navigate(res.data.user.role === "owner" ? "/owner" : "/vet");
      })
      .catch(() => setErr("Invalid credentials"));
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Login</h2>
      <input className="w-full mb-2 border p-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full mb-2 border p-2" placeholder="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} />
      {err && <div className="text-red-500 mb-2">{err}</div>}
      <button className="w-full bg-blue-600 text-white rounded px-4 py-2">Login</button>
    </form>
  );
}