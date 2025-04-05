import React from "react";
import { profileData } from "../data/profileData";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="profile-card">
        <h1>{profileData.name}</h1>
        <h2>{profileData.title}</h2>
        <p className="bio">{profileData.bio}</p>

        <div className="contact">
          <p>📧 {profileData.email}</p>
        </div>

        <div className="skills">
          <h3>スキル</h3>
          <ul>
            {profileData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
