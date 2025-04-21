import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>

      <div className="profile-pic-section">
        <img
          src={
            previewImage ||
            "https://via.placeholder.com/150?text=Profile+Picture"
          }
          alt="Profile"
          className="profile-pic"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <div className="profile-info">
        <h3>Name: John Doe</h3>
        <p>Email: john@example.com</p>
        <p>Bio: Full-stack developer exploring AWS and React ❤️</p>
      </div>
    </div>
  );
};

export default ProfilePage;
