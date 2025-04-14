import React, { useState } from 'react';
import loginpic from '../assets/login.png';

const Login: React.FC = () => {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const Clicksignup = () => setMode('signup');
    const Clicklogin = () => setMode('login');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f3f4f6', overflow: 'hidden' }}>
            <div style={{ display: 'flex', width: '50%', height: '60%', borderRadius: '30px', boxShadow: '0 4px 25px rgba(0,0,0,0.6)', overflow: 'hidden', background: 'white', position: 'relative' }}>

                <div style={{ position: 'absolute', top: 0, left: mode === 'login' ? '0' : '50%', width: '50%', height: '100%', zIndex: 2, backgroundColor: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', transition: 'all 0.5s ease' }}>
                    <img src={loginpic} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center -150px', borderRadius: '30px 30px 30px 30px', transition: 'all 0.5s ease' }} />
                </div>

                <div style={{ flexDirection: 'column', position: 'absolute', top: 0, left: mode === 'login' ? '50%' : '0%', width: '50%', height: '100%', backgroundColor: '#ffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', transition: 'all 0.5s ease' }}>
                    <h1 className="fw-bold" style={{ marginBottom: '20px', color: 'rgb(0, 51, 255)' }}>
                        {mode === 'login' ? 'SIGN IN' : 'Create Account'}
                    </h1>



                    <form style={{ width: '300px' }}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        {mode === 'signup' ? (
                            <div className="mb-3">
                                <label htmlFor="comfirmpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="comfirmpassword" placeholder="Confirm your password" />
                            </div>
                        ) : null}

                        <button type="submit" className="btn btn-primary w-100 fw-bold">
                            {mode === 'login' ? 'LOGIN' : 'SIGNUP'}
                        </button>

                    </form>

                    {mode === 'login' ? (
                        <p onClick={Clicksignup} className="mt-2 fw-semibold text-primary" style={{ cursor: 'pointer' }}>
                            Signup
                        </p>
                    ) : (
                        <p onClick={Clicklogin} className="mt-2 fw-semibold text-primary" style={{ cursor: 'pointer' }}>
                            Login
                        </p>
                    )}



                </div>


            </div>
        </div>
    );
};

export default Login;
