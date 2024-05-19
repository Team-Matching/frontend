import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import ProfileForm from './ProfileForm';

const App = () => {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li style={{ float: 'right' }}>
                        <a href="/auth">Login / Sign Up</a>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<ProfileForm />} />
            </Routes>
        </div>
    );
};

const Auth = () => (
    <div>
        <h2>Login or Sign Up</h2>
        <SignInForm />
        <SignUpForm />
    </div>
);

export default App;
