import React from 'react';
import searchIcon from '../../assets/icons/search.png';
import './SearchBar.css';

const SearchBar = () => {
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
            <div className="profile-pic">
                <img 
                    // src={require('./assets/images/profile-pic.jpg')} 
                    alt="Profile" 
                />
            </div>
        </div>
    );
};

export default SearchBar;
