import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Rooms.css"; // Import custom CSS for room styling

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(
          "https://roomstop-backend-production.up.railway.app/rooms/getapartments"
        );
        setRooms(JSON.parse(response.data));
        // console.log(rooms);
        setLoading(false);
        // console.log(typeof rooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Available Rooms</h1>
        {rooms.map((room) => (
          <div key={room.room_id} className="room-card">
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
              <button className="btn btn-primary">Add to Shortlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
