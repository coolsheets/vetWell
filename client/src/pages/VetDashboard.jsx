import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "../services/api";
import AppointmentCard from "../components/AppointmentCard";

export default function VetDashboard() {
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("/appointments", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setAppointments(res.data))
      .catch(console.error);
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dr. {user.name}'s Dashboard</h1>
      <div className="mb-2 font-semibold">Scheduled Appointments:</div>
      <div className="flex flex-col gap-2">
        {appointments.map(appt => <AppointmentCard key={appt._id} appointment={appt} />)}
      </div>
      {/* Could add tab to view pet records assigned to them etc. */}
    </div>
  );
}