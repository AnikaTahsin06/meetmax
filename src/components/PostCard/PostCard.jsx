import React from 'react';
import './PostCard.css';
import LikeButton from '../LikeButton/LikeButton';
import Comment from '../Comment/Comment';
import ShareButton from '../ShareButton/ShareButton';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <div className="post-header">
                <img src={post.userImage} alt="User" className="user-image" />
                <div>
                    <h3>{post.userName}</h3>
                    <p>{post.date}</p>
                </div>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
                <div className="post-images">
                    {post.images.map((image, index) => (
                        <img key={index} src={image} alt={`Post ${index}`} />
                    ))}
                </div>
            </div>
            <div className="post-actions">
                <LikeButton />
                <Comment comments={post.comments} />
                <ShareButton />
            </div>
        </div>
    );
};

export default PostCard;
