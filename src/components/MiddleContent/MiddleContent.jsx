import React from 'react'
import PostCard from '../PostCard/PostCard';
import './MiddleContent.css'
import YouMightLike from '../YouMightLike/YouMightLike';
import RecentEvent from '../RecentEvent/RecentEvent';

const MiddleContent = () => {
  const post = {
    userImage: 'https://randomuser.me/api/portraits/men/41.jpg',
    userName: 'Prothinidi Thomas',
    date: '2d',
    content: "If you think adventure is dangerous, try routine, it's lethal. Paulo Coelho! Good morning all friends.",
    images: [
      'https://images.unsplash.com/photo-1',
      'https://images.unsplash.com/photo-2',
      'https://images.unsplash.com/photo-3'
    ],
    comments: [
      { userName: 'Swapan Bala', text: 'Looks amazing and breathtaking. Been there, beautiful!' },
      { userName: 'Whitechapel Gallery', text: 'Thank you @Swapan Bala' }
    ]
  };
  return (
    <div className="home-container">
      <div className="home-left">
        <PostCard post={post} />
        <RecentEvent />
        <RecentEvent />
      </div>
      <div className="home-right">
        <YouMightLike />
        <RecentEvent />
      </div>
    </div>
  )
}

export default MiddleContent