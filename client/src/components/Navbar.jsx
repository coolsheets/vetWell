import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <div className="font-bold">🐾 Pet Wellness App</div>
      <div>
        {user ? (
          <>
            <span className="mr-3 capitalize">Logged in as: {user.role}</span>
            <Link className="mr-2" to={user.role === "owner" ? "/owner" : "/vet"}>
              Dashboard
            </Link>
            <button onClick={logout} className="bg-blue-900 px-2 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="mr-2" to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}