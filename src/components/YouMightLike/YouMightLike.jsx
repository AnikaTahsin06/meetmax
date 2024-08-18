import React from 'react';
import mayLikeUser from '../../assets/images/Ellipse 535.png'
import explore from '../../assets/icons/explore.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/Twitter 2.png'
import instagram from '../../assets/icons/Instagram.png'
import './YouMightLike.css';  

function YouMightLike() {
    return (
        <div className="like-card">
            <div className="like-card-header">
                <p className="like-header-text">You Might Like</p>
                <a href="#" className="see-all">See All</a>
            </div>
            <div className="like-card-content">
                <div className="like-content-header">
                    <img src={mayLikeUser} alt="User" className="user-image" />
                    <div>
                        <h3 className="like-card-name">Radovan SkillArena</h3>
                        <p className="like-card-title">Founder & CEO at Trophy</p>
                    </div>
                </div>
                <div className="like-card-icons">
                    <img src={explore} alt="explore" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
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
