import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-4">
      <h3>Welcome, {user?.name}</h3>
      <p className="text-muted">Select an option to continue:</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <Link className="btn btn-outline-primary w-100 p-3" to="/attendance">
            📘 Attendance
          </Link>
        </div>

        <div className="col-md-4">
          <Link className="btn btn-outline-success w-100 p-3" to="/buses">
            🚌 Bus Booking
          </Link>
        </div>

        <div className="col-md-4">
          <Link className="btn btn-outline-info w-100 p-3" to="/bookings">
            🎫 My Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}
