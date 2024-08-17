import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    return (
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={() => setLiked(!liked)}>
            {liked ? 'Liked' : 'Like'}
        </button>
    );
};

export default LikeButton;
