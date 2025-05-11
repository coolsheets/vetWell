import { useState, useEffect } from "react";
import axios from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function BookAppointmentModal({ open, onClose, pets, onAppointmentBooked }) {
  const { token } = useAuth();
  const [form, setForm] = useState({
    pet: "",
    vet: "",
    datetime: "",
    description: ""
  });
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    // Fetch vets for the selection dropdown
    if (open) {
      axios.get("/auth?role=vet", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setVets(res.data))
        .catch(() => setVets([]));
    }
  }, [open, token]);

  useEffect(() => {
    if (!open) {
      setForm({ pet: "", vet: "", datetime: "", description: "" });
    }
  }, [open]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await axios.post("/appointments", form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (onAppointmentBooked) onAppointmentBooked();
      onClose();
    } catch {
      setErr("Failed to book appointment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-30 bg-black bg-opacity-40 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-lg w-full max-w-md relative">
        <button
          type="button"
          className="absolute top-2 right-4 text-2xl text-gray-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="font-bold text-lg mb-3">Book Appointment</h2>
        {err && <div className="mb-2 text-red-600">{err}</div>}

        <label className="block mb-1 font-medium">Pet</label>
        <select
          className="border w-full mb-2 p-2 rounded"
          name="pet"
          value={form.pet}
          onChange={handleChange}
          required
        >
          <option value="">Select Pet</option>
          {pets.map(pet => (
            <option key={pet._id} value={pet._id}>{pet.name}</option>
          ))}
        </select>

        <label className="block mb-1 font-medium">Vet</label>
        <select
          className="border w-full mb-2 p-2 rounded"
          name="vet"
          value={form.vet}
          onChange={handleChange}
          required
        >
          <option value="">Select Vet</option>
          {vets.map(vet => (
            <option key={vet._id} value={vet._id}>
              Dr. {vet.name} ({vet.email})
            </option>
          ))}
        </select>

        <label className="block mb-1 font-medium">Date & Time</label>
        <input
          className="border w-full mb-2 p-2 rounded"
          type="datetime-local"
          name="datetime"
          value={form.datetime}
          onChange={handleChange}
          required
        />

        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Reason/Notes"
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}