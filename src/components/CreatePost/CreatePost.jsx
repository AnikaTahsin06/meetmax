import React from 'react';
import profile from '../../assets/images/profile-pic.png'
import picture from '../../assets/icons/Picture.png'
import smile from '../../assets/icons/Smile.png'
import video from '../../assets/icons/Video-camera.png'
import './CreatePost.css';

const CreatePost = () => {
    return (
        <div className="create-card">
            <div className="create-post-top">
                <img
                    src={profile}
                    alt="Profile"
                    className="profile-pic"
                />
                <input
                    type="text"
                    className="post-input"
                    placeholder="What's happening?"
                />
            </div>
            <div className="create-post-bottom">
            <button className="option">
                        <img src={video} alt="video" /> Live Video
                    </button>
                    <button className="option">
                        <img src={picture} alt="picture" /> Photo/Video
                    </button>
                    <button className="option">
                        <img src={smile} alt="smile" /> Feeling
                    </button>
                    <button className="post-button">Post</button>
                {/* <div className="post-options">
                    
                </div> */}
            </div>
        </div>
    );
};

export default CreatePost;
