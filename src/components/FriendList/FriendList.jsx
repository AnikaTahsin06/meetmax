import React from 'react';
import other from '../../assets/icons/Other.png'
import './FriendList.css'; // Ensure you have the correct path to your CSS file

const FriendsList = () => {
    const friends = [
        { name: 'Kayleigh Bysouth', profilePic: 'kayleigh.png', lastActive: '2 min', isActive: false },
        { name: 'Jess Phillips MP', profilePic: 'jess.png', lastActive: '', isActive: true },
        { name: 'MP Eslam Hisham', profilePic: 'eslam.png', lastActive: '8 min', isActive: false },
        { name: 'Leviza Vetvendos', profilePic: '', lastActive: '', isActive: true, initials: 'LV' },
    ];

    return (
        <div className="friends-list">
            <div className="friends-title">
                <h3 className="friends-list-title">Friends</h3>
                <div>
                    <img src={other} alt="other" />
                </div>
            </div>
            <>
                {friends.map((friend, index) => (
                    <li key={index} className="friend-item">
                        <div className="friend-info">
                            {friend.profilePic ? (
                                <img src={friend.profilePic} alt={friend.name} className="friend-pic" />
                            ) : (
                                <div className="friend-initials">{friend.initials}</div>
                            )}
                            <div className="friend-name">
                                {friend.name}
                                {friend.isActive && <span className="active-indicator"></span>}
                            </div>
                        </div>
                        <span className="last-active">{friend.lastActive}</span>
                    </li>
                ))}
            </>
        </div>
    );
};

export default FriendsList;
