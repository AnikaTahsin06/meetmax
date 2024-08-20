import React from 'react'
import FriendsList from '../FriendList/FriendList'

const RightSidebar = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="post-input"
          placeholder="Search friends"
        />
      </div>
      <FriendsList />
    </div>
  )
}

export default RightSidebar