import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Rooms.css'; // Import custom CSS for room styling

const Shortlist = () => {

    const rooms = [
        {
          room_id: "1",
          Location: "123 Main St, Boston, MA",
          Rent_USD: "1200.00",
          Bedrooms: 2,
          Bathrooms: 1,
          Square_Feet: 850,
          Furnished: "Yes",
          Pet_Friendly: "No",
          Available_From: "2024-01-01",
          Parking_Available: "Yes",
          Image_Link: "https://media.istockphoto.com/id/1168256209/photo/multifunctional-bedroom-and-workspace-interior-with-bed-and-desk.jpg?s=2048x2048&w=is&k=20&c=KU4jYxXSuUHiMgPq-z9_gse-KbfEx7UHciRe5CmJu5c=" // Sample image for display
        },
        {
          room_id: "2",
          Location: "456 Elm St, Boston, MA",
          Rent_USD: "1400.00",
          Bedrooms: 3,
          Bathrooms: 2,
          Square_Feet: 1150,
          Furnished: "No",
          Pet_Friendly: "Yes",
          Available_From: "2024-02-01",
          Parking_Available: "No",
          Image_Link: "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=2048x2048&w=is&k=20&c=Qr6-TUnCMpsuArE5v8cOuumfxBR41IXi2ht5CW6OtXo="
        }
      ];

  const [shortlistedRooms, setShortlistedRooms] = useState([]);

  useEffect(() => {
    const fetchShortlistedRooms = async () => {
      try {
        const response = await axios.get('/api/shortlist');
        setShortlistedRooms(response.data.rooms);
      } catch (error) {
        console.error('Failed to fetch shortlisted rooms:', error);
      }
    };

    fetchShortlistedRooms();
  }, []);

  const handleRemove = async (roomId) => {
    try {
      await axios.delete(`/api/shortlist/${roomId}`);
      setShortlistedRooms(shortlistedRooms.filter(room => room.room_id !== roomId));
    } catch (error) {
      console.error('Failed to remove room from shortlist:', error);
    }
  };

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

export default Shortlist;
