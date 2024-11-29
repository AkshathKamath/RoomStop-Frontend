import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "./Rooms.css"; // Import custom CSS for room styling

const Shortlist = () => {
  const [shortlistedRooms, setShortlistedRooms] = useState([]); // State to store shortlisted rooms

  // Fetch shortlisted apartments from the API
  useEffect(() => {
    const fetchShortlistedRooms = async () => {
      try {
        const response = await axios.get(
          "https://roomstop-backend-production.up.railway.app/rooms/show_shortlisted_apartments"
        );
        console.log("Shortlisted Rooms Response:", response.data);
        // console.log(Array.isArray(JSON.parse(response.data)));

        setShortlistedRooms(JSON.parse(response.data)); // Set the fetched rooms
      } catch (error) {
        console.error("Failed to fetch shortlisted rooms:", error);
      }
    };

    fetchShortlistedRooms();
  }, []);

  // Handle Delete button click
  const handleRemove = async (apartmentId) => {
    try {
      console.log(apartmentId);
      const response = await axios.delete(
        "https://roomstop-backend-production.up.railway.app/rooms/deleteapartment",
        { apartment_id: apartmentId } // Pass the apartment ID as JSON
      );
      console.log(response.data);

      // Remove the deleted room from the state
      setShortlistedRooms((prevState) =>
        prevState.filter((room) => room.Apartment_ID !== apartmentId)
      );
    } catch (error) {
      console.error("Failed to remove room from shortlist:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <div className="container mt-4">
        <h1>Shortlisted Rooms</h1>
        <p>No shortlisted rooms available.</p>
      </div> */}
      <div className="container mt-4">
        <h1>Shortlisted Rooms</h1>
        {shortlistedRooms.length === 0 ? (
          <p>No shortlisted rooms available.</p>
        ) : (
          shortlistedRooms.map((room) => (
            <div key={room.Apartment_ID} className="room-card">
              <div className="room-image">
                <img src={room.Image_Link} alt="Room" />
              </div>
              <div className="room-details">
                <h5>Location: {room.Location}</h5>
                <p>Rent: ${room.Rent_USD}</p>
                <p>Bedrooms: {room.Bedrooms}</p>
                <p>Bathrooms: {room.Bathrooms}</p>
                <p>Square Feet: {room.Square_Feet}</p>
                <p>Furnished: {room.Furnished}</p>
                <p>Pet Friendly: {room.Pet_Friendly}</p>
                <p>Available From: {room.Available_From}</p>
                <p>Parking Available: {room.Parking_Available}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(room.Apartment_ID)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shortlist;
