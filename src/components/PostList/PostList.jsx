import React, { useState } from 'react';
import heart1 from '../../assets/icons/Heart.png'
import heart2 from '../../assets/icons/Heart 2.png'
import commentIcon from '../../assets/icons/Comment.png'
import share from '../../assets/icons/Share.png'
import './PostList.css'

const Post = ({ post }) => {
    const [liked, setLike] = useState(false);


    const handleLike = () => {
        setLike(!liked);
    };
    return (
        <div className="post">
            <div className="post-header">
                <img src={post.userImage} alt={post.userName} className="user-image" />
                <div className="post-info">
                    <span className="user-name">{post.userName}</span>
                    <span className="time-ago">{post.timeAgo}</span>
                    <span className="privacy">{post.isPublic ? 'Public' : 'Friends'}</span>
                </div>
                <div className="more-options">...</div>
            </div>
            <div className="post-content">
                {post.images.length === 1 && (
                    <img src={post.images[0]} alt="Post Image 1" className="single-image" />
                )}
                {post.images.length === 2 && (
                    <div className="two-images">
                        {post.images.map((image, index) => (
                            <img src={image} alt={`Post Image ${index + 1}`} key={index} className="half-image" />
                        ))}
                    </div>
                )}
                {post.images.length === 3 && (
                    <div className="three-images">
                        <img src={post.images[0]} alt="Post Image 1" className="half-image" />
                        <div className="two-small-images">
                            {post.images.slice(1).map((image, index) => (
                                <img src={image} alt={`Post Image ${index + 2}`} key={index} className="small-image" />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="post-actions">
                <span>{post.likes} Likes</span>
                <span>{post.commentsCount} Comments</span>
                <span>{post.shares} Shares</span>
            </div>
            <div className="post-actions comment-section">
                <span onClick={handleLike} style={{display:'flex'}}><img src={liked ? heart2 :heart1} alt="liked" /> <span>Likes</span></span>
                <span style={{display:'flex', gap:'3px'}}><img src={commentIcon} alt='comment'/><span>Comments</span></span>
                <span style={{display:'flex', gap:'3px'}}><img src={share} alt='share' /> <span>Shares</span></span>
            </div>
            <div className="post-comments">
                {post.comments.length > 0 ? (
                    post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <span className="comment-user">{comment.userName}</span>
                            <span className="comment-time">{comment.timeAgo}</span>
                            <p>{comment.commentText}</p>
                            {comment.replies && comment.replies.length > 0 && (
                                <div className="comment-replies">
                                    {comment.replies.map((reply, idx) => (
                                        <div key={idx} className="reply">
                                            <span className="reply-user">{reply.userName}</span>
                                            <span className="reply-time">{reply.timeAgo}</span>
                                            <p>{reply.commentText}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts
                .filter(post => parseInt(post.timeAgo) <= 24)
                .map(post => (
                    <Post key={post.id} post={post} />
                ))}
            <hr />
            {posts
                .filter(post => parseInt(post.timeAgo) > 24)
                .map(post => (
                    <Post key={post.id} post={post} />
                ))}
        </div>
    );
};

export default PostList;
