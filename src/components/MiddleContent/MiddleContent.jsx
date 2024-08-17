import React from 'react'
import PostCard from '../PostCard/PostCard';

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
    <div>
      <PostCard post={post} />
      <PostCard post={post} />
    </div>
  )
}

export default MiddleContent