import React from 'react'
import logo from '../../assets/images/Logo.png'
import logo2 from '../../assets/images/Logo2.png'
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import five from '../../assets/images/5.png'
import six from '../../assets/images/6.png'
import other from '../../assets/icons/Other.png'
import './RecentEvent.css'
import SeenBy from '../SeenBy/SeenBy'

const RecentEvent = () => {
    const images1 = [one, two, three, four, five, six, one, two];
    const images2 = [four, five, six, four, five, six, one, two, one, two, three]
    return (
        <div className="event-card">
            <div className="event-card-header">
                <p className="event-header-text">Recent Event</p>
                <div>
                    <img src={other} alt="other" />
                </div>
            </div>
            <div className="event-card-content">
                <div className="event-content-header">
                    <img src={logo} alt="User" className="event-user-image" />
                    <div>
                        <h3 className="event-card-name">Graduation Ceremony</h3>
                        <p className="event-card-title">The graduation ceremony is also sometimes called...</p>
                    </div>
                </div>
                <div className='event-card-divider'></div>
                <SeenBy count={8} images={images1}/>
                <div className="event-content-header mt">
                    <img src={logo2} alt="User" className="event-user-image" />
                    <div>
                        <h3 className="event-card-name">Photography Ideas</h3>
                        <p className="event-card-title">Reflections. Reflections work because they can create...</p>
                    </div>
                </div>
                <div className='event-card-divider'></div>
                <SeenBy count={11} images={images2}/>
                <div className='mt'></div>
                {/* <div className="like-card-icons">
                    <img src={explore} alt="explore" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="linkedin" />
                    <img src={instagram} alt="instagram" />
                </div>
                <div className="like-card-actions">
                    <button className="ignore-btn">Ignore</button>
                    <button className="follow-btn">Follow</button>
                </div> */}
            </div>
        </div>
    )
}

export default RecentEvent