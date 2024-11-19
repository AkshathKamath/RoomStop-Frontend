import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Roommates = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    smoker: "",
    petFriendly: "",
    nightOwl: "",
    cleanliness: "",
    alcoholConsumption: "",
    soundLevelPreference: "",
    introvertExtrovert: "",
    budgetRange: "",
    hobbies: "",
    studyArea: "",
    culinarySkills: "",
    fitnessLevel: "",
    dietaryPreference: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const formatKeysWithSpaces = (data) => {
    return {
      Age: data.age,
      Gender: data.gender,
      Smoker: data.smoker,
      "Pet Friendly": data.petFriendly,
      "Night Owl": data.nightOwl,
      Cleanliness: data.cleanliness,
      "Alcohol Consumption": data.alcoholConsumption,
      "Sound Level Preference": data.soundLevelPreference,
      "Introvert/Extrovert": data.introvertExtrovert,
      "Budget Range": data.budgetRange,
      Hobbies: data.hobbies,
      "Study Area": data.studyArea,
      "Culinary Skills": data.culinarySkills,
      "Fitness Level": data.fitnessLevel,
      "Dietary Preference": data.dietaryPreference,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatKeysWithSpaces(formData);
    // console.log(JSON.stringify(formattedData));
    axios
      .post(
        "https://roomstop-backend-production.up.railway.app/model",
        formattedData
      )
      .then((response) => {
        console.log("Form submitted successfully");
        console.log(response.data);
        // handle success actions here, e.g., notifications, redirect, etc.
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // handle error actions here, e.g., error notifications
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h2>Roommate Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              readOnly
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Non-binary">Non-binary</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="smoker" className="form-label">
              Smoker
            </label>
            <select
              className="form-select"
              id="smoker"
              name="smoker"
              value={formData.smoker}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="petFriendly" className="form-label">
              Pet Friendly
            </label>
            <select
              className="form-select"
              id="petFriendly"
              name="petFriendly"
              value={formData.petFriendly}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="nightOwl" className="form-label">
              Night Owl
            </label>
            <select
              className="form-select"
              id="nightOwl"
              name="nightOwl"
              value={formData.nightOwl}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="cleanliness" className="form-label">
              Cleanliness
            </label>
            <select
              className="form-select"
              id="cleanliness"
              name="cleanliness"
              value={formData.cleanliness}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="alcoholConsumption" className="form-label">
              Alcohol Consumption
            </label>
            <select
              className="form-select"
              id="alcoholConsumption"
              name="alcoholConsumption"
              value={formData.alcoholConsumption}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="soundLevelPreference" className="form-label">
              Sound Level Preference
            </label>
            <select
              className="form-select"
              id="soundLevelPreference"
              name="soundLevelPreference"
              value={formData.soundLevelPreference}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Prefers Music">Prefers Music</option>
              <option value="Quiet">Quiet</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="introvertExtrovert" className="form-label">
              Introvert/Extrovert
            </label>
            <select
              className="form-select"
              id="introvertExtrovert"
              name="introvertExtrovert"
              value={formData.introvertExtrovert}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
              <option value="Ambivert">Ambivert</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="budgetRange" className="form-label">
              Budget Range($)
            </label>
            <select
              className="form-select"
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="<500">500</option>
              <option value="500-1000">500-1000</option>
              <option value="1000-1500">1000-1500</option>
              <option value="1500-2000">1500-2000</option>
              <option value=">2000">2000</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="hobbies" className="form-label">
              Hobbies
            </label>
            <select
              className="form-select"
              id="hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Cooking">Cooking</option>
              <option value="Travelling">Travelling</option>
              <option value="Reading">Reading</option>
              <option value="Technology">Technology</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="studyArea" className="form-label">
              Study Area
            </label>
            <select
              className="form-select"
              id="studyArea"
              name="studyArea"
              value={formData.studyArea}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Arts">Arts</option>
              <option value="STEM">STEM</option>
              <option value="Business">Business</option>
              <option value="Humanities">Humanities</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="culinarySkills" className="form-label">
              Culinary Skills
            </label>
            <select
              className="form-select"
              id="culinarySkills"
              name="culinarySkills"
              value={formData.culinarySkills}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="fitnessLevel" className="form-label">
              Fitness Level
            </label>
            <select
              className="form-select"
              id="fitnessLevel"
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="dietaryPreference" className="form-label">
              Dietary Preference
            </label>
            <select
              className="form-select"
              id="dietaryPreference"
              name="dietaryPreference"
              value={formData.dietaryPreference}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Vegan">Vegan</option>
              <option value="Any">Any</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Pescatarian">Pescatarian</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Roommates;
