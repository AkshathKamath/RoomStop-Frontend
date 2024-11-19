import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <h1>Welcome to RoomStop</h1>
      <p>Find the perfect roommate or room in Boston today!</p>
      <ul>
        <li>
          <b> Find your ideal best-fit roommates!</b>
          <p>
            Our deep learning algorithms analyze your lifestyle, preferences,
            and personality traits to match you with the perfect roommates.
          </p>
        </li>
        <li>
          <b>View the best available rooms for rent!</b>
          <p>
            Instantly explore the best available rooms for rent that match your
            budget, location preferences, and lifestyle.
          </p>
        </li>
        <li>
          <b>In-Depth analytics of the rental landscape!</b>
          <p>
            Unlock a comprehensive view of rental trends with our cutting-edge
            analytics.
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;
