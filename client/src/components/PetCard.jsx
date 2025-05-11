export default function PetCard({ pet }) {
  return (
    <div className="border rounded p-2 bg-white w-60 shadow">
      <div className="font-bold">{pet.name}</div>
      <div>{pet.breed}</div>
      <div className="text-xs">Age: {pet.age}</div>
      {pet.photo && <img src={pet.photo} alt="" className="w-full mt-2" />}
      {/* Link to record, appointments */}
    </div>
  )
}