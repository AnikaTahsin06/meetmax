import React from 'react';
import FeedIcon from '../Icons/FeedIcon';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
  return (
    <nav className="feed-nav">
      <div className='feed-logo'><FeedIcon /> <h4>Meetmax</h4></div>
      <div className='feed-search'><SearchBar /></div>
    </nav>
  );
}

export default NavBar;
