import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homeWhiteIcon from '../../assets/icons/HomeWhite.png'
import community from '../../assets/icons/Community.png'
import message from '../../assets/icons/Message.png'
import notification from '../../assets/icons/Notification.png'
import explore from '../../assets/icons/Explore.png'
import profile from '../../assets/icons/User.png'
import settings from '../../assets/icons/Setting.png'
import logout from '../../assets/icons/LogOut.png'
import './LeftSidebar.css';

const LeftSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    // Redirect to sign-in page
    navigate('/auth/signin');
  };
  return (
    <div className="left-menu">
      <Link to="/" className="sidebar-item active">
        <span className="icon"><img src={homeWhiteIcon} alt="Home Icon" /></span><span className="text">Feed</span>
      </Link>
      <Link to="/community" className="sidebar-item">
        <span className="icon"><img src={community} alt="Community Icon" /></span><span className="text">My community</span>
      </Link>
      <div className=' no-visible-tab'>
        <Link to="/messages" className="sidebar-item">
          <span className="icon"><img src={message} alt="message Icon" /></span><span className="text">Messages</span>
        </Link>
      </div>
      <div className='no-visible-tab'>
        <Link to="/notifications" className="sidebar-item">
          <span className="icon"><img src={notification} alt="notification Icon" /></span><span className="text">Notification</span>
          <span className="notification-badge">2</span>
        </Link>
      </div>
      <Link to="/explore" className="sidebar-item">
        <span className="icon"><img src={explore} alt="explore Icon" /></span><span className="text">Explore</span>
      </Link>
      <div className=' no-visible-laptop'>
        <Link to="/notifications" className="sidebar-item">
          <div>
            <span className="icon"><img src={notification} alt="notification Icon" /></span><span className="text">Notification</span>
            <span className="notification-badge">2</span>
          </div>
        </Link>
      </div>
      <Link to="/profile" className="sidebar-item no-visible-tab">
        <span className="icon"><img src={profile} alt="profile Icon" /></span><span className="text">Profile</span>
      </Link>
      <Link to="/settings" className="sidebar-item">
        <span className="icon"><img src={settings} alt="settings Icon" /></span><span className="text">Settings</span>
      </Link>
      <div className=' no-visible-tab'>
        <button onClick={handleLogout} className="sidebar-item logout-button">
          <span className="icon"><img src={logout} alt="Logout Icon" /></span><span className="text">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default LeftSidebar;
