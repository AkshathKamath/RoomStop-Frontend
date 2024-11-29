import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';

const RoommateDetails = () => {
  const location = useLocation();
  let { matchedPreferences } = location.state || {}; // Access data passed via state

  console.log("Raw Matched Preferences:", matchedPreferences);

  // Parse the JSON string if needed
  try {
    if (typeof matchedPreferences === "string") {
      matchedPreferences = JSON.parse(matchedPreferences); // First parse
      if (typeof matchedPreferences === "string") {
        matchedPreferences = JSON.parse(matchedPreferences); // Second parse if still a string
      }
    }
  } catch (error) {
    console.error("Error parsing matchedPreferences:", error);
    matchedPreferences = []; // Default to empty array if parsing fails
  }

  console.log("Parsed Matched Preferences:", matchedPreferences);

  // Check if matchedPreferences is valid
  if (!Array.isArray(matchedPreferences) || matchedPreferences.length === 0) {
    return (
      <div className="container mt-3">
        <h2>No matched roommates found.</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Matched Roommates</h2>
        <div className="row">
          {matchedPreferences.map((roommate, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{roommate.Name || "Unknown"}</h5>
                  <ul className="list-group list-group-flush">
                    {Object.entries(roommate).map(([key, value]) => (
                      <li className="list-group-item" key={key}>
                        <strong>{key}:</strong> {value || "N/A"}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
