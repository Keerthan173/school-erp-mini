import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import All Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Buses from "./pages/Buses";
import Bookings from "./pages/Bookings";

// Import Navbar
import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        <Route path="/attendance" element={
          <ProtectedRoute><Attendance /></ProtectedRoute>
        } />

        <Route path="/buses" element={
          <ProtectedRoute><Buses /></ProtectedRoute>
        } />

        <Route path="/bookings" element={
          <ProtectedRoute><Bookings /></ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
