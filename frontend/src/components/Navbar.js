import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  if (!user) return null; // hide navbar on login/register

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/dashboard">School ERP</Link>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <span className="nav-link text-light">{user.name}</span>
        </li>
        <li className="nav-item">
          <button className="btn btn-warning btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
