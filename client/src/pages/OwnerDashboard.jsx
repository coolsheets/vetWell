import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "../services/api";
import PetCard from "../components/PetCard";

export default function OwnerDashboard() {
  const { user, token } = useAuth();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/pets", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setPets(res.data))
      .catch(console.error);
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome, {user.name}!</h1>
      <div className="mb-2 font-semibold">Your Pets:</div>
      <div className="flex flex-wrap gap-3">
        {pets.map(pet => <PetCard key={pet._id} pet={pet} />)}
      </div>
      {/* Button to add pet, list appointments, etc. */}
    </div>
  );
}