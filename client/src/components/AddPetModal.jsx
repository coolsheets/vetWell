import { useState } from "react";
import axios from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function AddPetModal({ open, onClose, onPetAdded }) {
  const { token } = useAuth();
  const [form, setForm] = useState({ name: "", breed: "", age: "", photo: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await axios.post("/pets", form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (onPetAdded) onPetAdded(res.data);
      setForm({ name: "", breed: "", age: "", photo: "" });
      onClose();
    } catch (e) {
      setErr("Failed to add pet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-30 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white rounded p-5 shadow-lg w-full max-w-md relative">
        <button
          type="button"
          className="absolute top-2 right-4 text-2xl text-gray-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="font-bold text-lg mb-3">Add Pet</h2>
        {err && <div className="mb-2 text-red-600">{err}</div>}
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Pet Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Breed"
          name="breed"
          value={form.breed}
          onChange={handleChange}
        />
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Age"
          name="age"
          type="number"
          min="0"
          value={form.age}
          onChange={handleChange}
        />
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Photo URL"
          name="photo"
          value={form.photo}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Pet"}
        </button>
      </form>
    </div>
  );
}