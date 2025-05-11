export default function AppointmentCard({ appointment }) {
  return (
    <div className="border-l-4 border-blue-600 pl-2 bg-white">
      <div><span className="font-bold">{appointment.pet.name}</span> with {appointment.owner.name}</div>
      <div className="text-xs text-gray-600">{new Date(appointment.datetime).toLocaleString()}</div>
      <div>Status: {appointment.status}</div>
    </div>
  );
}