import React from 'react';
import searchIcon from '../../assets/icons/search.png';
import profilePic from '../../assets/images/profile-pic.png'
import './SearchBar.css';

const SearchBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    // // Log the profile picture value and constructed URL for debugging
    // console.log('Profile Picture:', user.profilePicture);
    // const profilePictureUrl = "http://localhost:8000/users/images/" + user.profilePicture;
    // console.log('Constructed URL:', profilePictureUrl);
    return (
        <div className="search-bar">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Search for something here..."
                    className="search-input"
                />
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="search-icon"
                />
            </div>
            <div className="profile-pic" >
                <h4>{user.name}</h4>
                <img src={profilePic} alt="" />
                {/* <img 
                    src={profilePictureUrl} 
                    alt="Profile" 
                    onError={(e) => { e.target.onerror = null; e.target.src = '/path/to/default-image.png'; }}
                /> */}
            </div>
        </div>
    );
};

export default SearchBar;
