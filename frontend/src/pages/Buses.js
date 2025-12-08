import { useEffect, useState } from "react";
import API from "../services/api";

export default function Buses() {
  const [buses, setBuses] = useState([]);

  const load = async () => {
    const res = await API.get("/buses");
    setBuses(res.data);
  };

  const book = async (id) => {
    await API.post("/bookings", { busId: id });
    alert("Seat booked!");
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container mt-4">
      <h4>Available Buses</h4>

      <button className="btn btn-secondary btn-sm mb-3" onClick={load}>
        Refresh List
      </button>

      <ul className="list-group mt-3">
        {buses.map(b => (
          <li key={b._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <b>{b.busNumber}</b> — {b.route}  
              <br/>Seats: {b.seatsAvailable}/{b.seatsTotal}
            </span>
            <button className="btn btn-primary" disabled={b.seatsAvailable === 0}
              onClick={() => book(b._id)}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}