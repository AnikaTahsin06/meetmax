import React from 'react'
import profile from '../../assets/images/profile-pic.png'
import upcoming from '../../assets/images/upcomming.png'
import send from '../../assets/icons/Send.png'
import './Birthday.css'

const Birthday = () => {
    return (
        <div className="birthday-card">
            <div className="birthday-card-header">
                <p className="birthday-header-text">Birthdays</p>
                <a href="#" className="see-all">See All</a>
            </div>
            <div className="birthday-card-content">
                <div className="birthday-content-header">
                    <img src={profile} alt="User" className="birthday-user-image" />
                    <div>
                        <h3 className="birthday-card-name">Edilson De Carvalho</h3>
                        <p className="birthday-card-title">Birthday today</p>
                    </div>
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        placeholder="Write on his inbox"
                        className="message-input"
                    />
                    <button className="send-button">
                        <img src={send} alt="send icon" />
                    </button>
                </div>
                <div className="birthday-content-header">
                    <img src={upcoming} alt="User" className="birthday-user-image" />
                    <div>
                        <h3 className="birthday-card-name">Upcoming birthdays</h3>
                        <p className="birthday-card-title">See 12 others have upcoming birthdays</p>
                    </div>
                </div>
                <div className='mt'></div>
            </div>
        </div>
    )
}

export default Birthday