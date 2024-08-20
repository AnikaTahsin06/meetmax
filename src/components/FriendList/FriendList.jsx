import React from 'react';
import other from '../../assets/icons/Other.png'
import kayleigh from '../../assets/images/user2.png'
import jess from '../../assets/images/jess.png'
import eslam from '../../assets/images/esslam.png'
import './FriendList.css';

const FriendsList = () => {
    const friends = [
        { name: 'Kayleigh Bysouth', profilePic: kayleigh, lastActive: '2 min', isActive: false },
        { name: 'Jess Phillips MP', profilePic: jess, lastActive: '', isActive: true },
        { name: 'MP Eslam Hisham', profilePic: eslam, lastActive: '8 min', isActive: false },
        { name: 'Leviza Vetvendos', profilePic: '', lastActive: '', isActive: true, initials: 'LV' },
        { name: 'Kayleigh Bysouth', profilePic: kayleigh, lastActive: '2 min', isActive: false },
        { name: 'Jess Phillips MP', profilePic: jess, lastActive: '', isActive: true },
        { name: 'MP Eslam Hisham', profilePic: eslam, lastActive: '8 min', isActive: false },
        { name: 'Leviza Vetvendos', profilePic: '', lastActive: '', isActive: true, initials: 'LV' },
        { name: 'Kayleigh Bysouth', profilePic: kayleigh, lastActive: '2 min', isActive: false },
        { name: 'Jess Phillips MP', profilePic: jess, lastActive: '', isActive: true },
        { name: 'MP Eslam Hisham', profilePic: eslam, lastActive: '8 min', isActive: false },
        { name: 'Leviza Vetvendos', profilePic: '', lastActive: '', isActive: true, initials: 'LV' },
        { name: 'Kayleigh Bysouth', profilePic: kayleigh, lastActive: '2 min', isActive: false },
        { name: 'Jess Phillips MP', profilePic: jess, lastActive: '', isActive: true },
        { name: 'MP Eslam Hisham', profilePic: eslam, lastActive: '8 min', isActive: false },
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
