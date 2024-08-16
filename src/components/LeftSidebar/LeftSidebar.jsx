import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div className="left-menu">
      <Link to="/" className="sidebar-item active">
        <span className="icon"><img src={homeWhiteIcon} alt="Home Icon"/></span><span className="text">Feed</span>
      </Link>
      <Link to="/community" className="sidebar-item">
        <span className="icon"><img src={community} alt="Community Icon"/></span><span className="text">My community</span>
      </Link>
      <Link to="/messages" className="sidebar-item">
        <span className="icon"><img src={message} alt="message Icon"/></span><span className="text">Messages</span>
      </Link>
      <Link to="/notifications" className="sidebar-item">
        <span className="icon"><img src={notification} alt="notification Icon"/></span><span className="text">Notification</span>
        <span className="notification-badge">2</span>  
      </Link>
      <Link to="/explore" className="sidebar-item">
        <span className="icon"><img src={explore} alt="explore Icon"/></span><span className="text">Explore</span>
      </Link>
      <Link to="/profile" className="sidebar-item">
        <span className="icon"><img src={profile} alt="profile Icon"/></span><span className="text">Profile</span>
      </Link>
      <Link to="/settings" className="sidebar-item">
        <span className="icon"><img src={settings} alt="settings Icon"/></span><span className="text">Settings</span>
      </Link>
      <Link to="/logout" className="sidebar-item">
        <span className="icon"><img src={logout} alt="logout Icon"/></span><span className="text">Logout</span>
      </Link>
    </div>
  );
}

export default LeftSidebar;
