import React from 'react';
import './ShareButton.css';

const ShareButton = () => {
    const sharePost = () => {
        alert('Post shared!');
    };

    return (
        <button className="share-button" onClick={sharePost}>
            Share
        </button>
    );
};

export default ShareButton;
