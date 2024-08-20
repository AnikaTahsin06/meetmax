import React from 'react';
import searchIcon from '../../assets/icons/search.png';
import profilePic from '../../assets/images/profile-pic.png'
import './SearchBar.css';

const SearchBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
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
                <h4 className="login-user">{user.name}</h4>
                <img 
                    src={"http://localhost:8000/" + user.profilePicture} 
                    alt="Profile" 
                />
            </div>
        </div>
    );
};

export default SearchBar;
