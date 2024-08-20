import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Authentication.css'
import Signup from '../../components/AuthForms/Signup';
import Signin from '../../components/AuthForms/Signin';
import ForgotPassword from '../../components/AuthForms/ForgotPassword';

const Authentication = () => {
    const navigate = useNavigate();
    return (
        <div className='auth__container'>
            <nav className="navbar">
                <div className="logo">
                    Meetmax
                </div>
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