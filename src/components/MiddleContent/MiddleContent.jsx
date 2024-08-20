import React from 'react'
import PostCard from '../PostCard/PostCard';
import './MiddleContent.css'
import YouMightLike from '../YouMightLike/YouMightLike';
import RecentEvent from '../RecentEvent/RecentEvent';
import Birthday from '../Birthdays/Birthday';
import CreatePost from '../CreatePost/CreatePost';
import postPhotos from '../../assets/images/PostPhotos.png'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import PostList from '../PostList/PostList';

const MiddleContent = () => {
  const post = {
    userImage: 'https://randomuser.me/api/portraits/men/41.jpg',
    userName: 'Prothinidi Thomas',
    date: '2d',
    content: "If you think adventure is dangerous, try routine, it's lethal.  ",
    images: [
      postPhotos,
    ],
    comments: [
      { userName: 'Swapan Bala', text: 'Looks amazing and breathtaking. Been there, beautiful!' },
      { userName: 'Whitechapel Gallery', text: 'Thank you @Swapan Bala' }
    ]
  };

  // posts list

  const posts = [
    {
      id: 1,
      userImage: user1,
      userName: 'Prothnidi Thomas',
      timeAgo: '24h',
      isPublic: true,
      images: [postPhotos],
      likes: 8,
      commentsCount: 3,
      shares: 5,
      comments: [], // No comments
    },
    {
      id: 2,
      userImage: user2,
      userName: 'Sepural Gallery',
      timeAgo: '19h',
      isPublic: true,
      images: [postPhotos, postPhotos, postPhotos],
      likes: 10,
      commentsCount: 3,
      shares: 17,
      comments: [
        {
          userName: 'Swapan Bala',
          timeAgo: '9h',
          commentText: 'Looks amazing and breathtaking. Been there, beautiful! sssssssssssss',
          replies: [
            {
              userName: 'Whitechapel Gallery',
              timeAgo: '9h',
              commentText: 'Thank you @Swapan Bala',
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <div className="home-container">
      <div className="home-left">
        <CreatePost />
        <PostList posts={posts} />
        {/* <PostCard post={post} /> */}
      </div>
      <div className="home-right">
        <YouMightLike />
        <RecentEvent />
        <Birthday />
      </div>
    </div>
  )
}

export default MiddleContent