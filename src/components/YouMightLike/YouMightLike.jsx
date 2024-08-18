import React from 'react';
import './YouMightLike.css'; // Import CSS file

function YouMightLike() {
  return (
    <div className="like-card">
      <div className="like-card-header">
        <p className="like-header-text">You Might Like</p>
        <a href="#" className="see-all">See All</a>
      </div>
      <div className="like-card-content">
        <img src="profile_picture_url" alt="Profile" className="profile-pic"/>
        <h2 className="like-card-name">Radovan SkillArena</h2>
        <p className="like-card-title">Founder & CEO at Trophy</p>
        <div className="icons">
          <a href="/" className="icon"><i className="fas fa-globe"></i></a>
          <a href="/" className="icon"><i className="fab fa-facebook"></i></a>
          <a href="/" className="icon"><i className="fab fa-twitter"></i></a>
          <a href="/" className="icon"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="like-card-actions">
          <button className="ignore-btn">Ignore</button>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default YouMightLike;
