import { useState, useEffect } from "react";
import API from "../services/api";

export default function Attendance() {
  const [records, setRecords] = useState([]);

  const mark = async (status) => {
    await API.post("/attendance", { status });
    load();
  };

  const load = async () => {
    const res = await API.get("/attendance");
    setRecords(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container mt-4">
      <h4>Your Attendance</h4>

      <button className="btn btn-success me-2" onClick={() => mark("present")}>Mark Present</button>
      <button className="btn btn-danger" onClick={() => mark("absent")}>Mark Absent</button>

      <ul className="list-group mt-3">
        {records.map(r => (
          <li key={r._id} className="list-group-item">
            {new Date(r.date).toDateString()} — {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
