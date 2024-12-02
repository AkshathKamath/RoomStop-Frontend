import React from "react";
import Navbar from "../components/Navbar";

const Analytics = () => (
  <div>
    <Navbar />
    <div className="container mt-4">
      <h1>Rental Analytics</h1>
      <p>Discover valuable insights about the rental landscape through these visualizations:</p>

      <div className="analytics-section">
        <div className="analytics-item">
          <img
            src={require("../Images/area_vs_rent_analysis.png")}
            alt="Area vs Rent Analysis"
            className="analytics-image"
          />
          <p>Analysis of rent trends based on the area.</p>
        </div>

        <div className="analytics-item">
          <img
            src={require("../Images/bedbath_vs_rent_analysis.png")}
            alt="Bed/Bath vs Rent Analysis"
            className="analytics-image"
          />
          <p>How the number of bedrooms and bathrooms impacts rent.</p>
        </div>

        <div className="analytics-item">
          <img
            src={require("../Images/location_vs_rent_analysis.png")}
            alt="Location vs Rent Analysis"
            className="analytics-image"
          />
          <p>Rent variations across different locations.</p>
        </div>

        <div className="analytics-item">
          <img
            src={require("../Images/roomcount_pie.png")}
            alt="Room Count Distribution"
            className="analytics-image"
          />
          <p>Distribution of rooms available for rent.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;
