import React from 'react';
import './Layout.css';
import NavBar from './NavBar';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar';

function Layout({ children }) {
    return (
        <div className="feed-container">
            <NavBar />
            <div className="left-sidebar">
                <LeftSidebar />
            </div>
            <div className="middle-content">
                {children}
            </div>
            <div className="right-sidebar">
                <RightSidebar />
            </div>
        </div>
    );
}

export default Layout;
