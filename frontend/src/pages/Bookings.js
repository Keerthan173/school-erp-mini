import { useEffect, useState } from "react";
import API from "../services/api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const load = async () => {
    const res = await API.get("/bookings");
    setBookings(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container mt-4">
      <h4>Your Bus Bookings</h4>

      <ul className="list-group mt-3">
        {bookings.map(b => (
          <li key={b._id} className="list-group-item">
            Bus {b.bus?.busNumber} — Seat {b.seatNumber}
            <br />
            Route: {b.bus?.route}
            <br />
            Time: {new Date(b.createdAt).toLocaleString("en-IN")}
          </li>
        ))}
      </ul>
    </div>
  );
}