import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Authentication.css'
import Signup from '../../components/AuthForms/Signup';
import Signin from '../../components/AuthForms/Signin';
import FeedIcon from '../../components/Icons/FeedIcon';
import ForgotPassword from '../../components/AuthForms/ForgotPassword';

const Authentication = () => {
    return (
        <div className='auth__container'>
            <nav className="navbar">
                <div className='feed-logo'><FeedIcon /> <h4>Meetmax</h4></div>
                <div className="language-select">
                    <select>
                        <option value="English (UK)">English (UK)</option>
                        <option value="Bengali">Bengali</option>
                    </select>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    )
}

export default Authentication