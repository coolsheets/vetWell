import { useEffect, useState } from "react";
import AddPetModal from "../components/AddPetModal";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { useAuth } from "../context/AuthContext";
import axios from "../services/api";
import PetCard from "../components/PetCard";

export default function OwnerDashboard() {
  const { user, token } = useAuth();
  const [pets, setPets] = useState([]);
  const [showAddPet, setShowAddPet] = useState(false);
  const [showBookAppt, setShowBookAppt] = useState(false);

  useEffect(() => {
    axios.get("/pets", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setPets(res.data))
      .catch(console.error);
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome, {user.name}!</h1>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setShowAddPet(true)} className="bg-green-500 text-white px-4 py-2 rounded shadow">Add Pet</button>
        <button onClick={() => setShowBookAppt(true)} className="bg-blue-500 text-white px-4 py-2 rounded shadow">Book Appointment</button>
      </div>

      <div className="mb-2 font-semibold">Your Pets:</div>
      <div className="flex flex-wrap gap-3">
        {pets.map(pet => <PetCard key={pet._id} pet={pet} />)}
      </div>

      <AddPetModal
        open={showAddPet}
        onClose={() => setShowAddPet(false)}
        onPetAdded={pet => setPets(p => [...p, pet])}
      />
      <BookAppointmentModal
        open={showBookAppt}
        onClose={() => setShowBookAppt(false)}
        pets={pets}
        onAppointmentBooked={() => {
          // Optionally, refresh appointments
        }}
      />
    </div>
  );
}