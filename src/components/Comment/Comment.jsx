import React from 'react';
import './Comment.css';

const Comment = ({ comments }) => {
    return (
        <div className="comments-section">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p><strong>{comment.userName}</strong></p>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Comment;
