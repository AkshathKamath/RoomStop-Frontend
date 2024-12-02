import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Roommates from "./pages/Roommates";
import Rooms from "./pages/Rooms";
import Shortlist from "./pages/Shortlist";
import RoommateDetails from "./pages/RoommateDetails";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/roommates" element={<Roommates />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/shortlist" element={<Shortlist />} />
          <Route path="/roommate-details" element={<RoommateDetails />} />
          <Route path="/analytics" element={<Analytics />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
