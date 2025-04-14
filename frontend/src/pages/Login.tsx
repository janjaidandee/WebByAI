import React, { useState } from 'react';
import logingirl from '../assets/login2.png';
import loginboy from '../assets/login3.png';

import { useNavigate } from 'react-router-dom';


import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; // อย่าลืมสร้าง firebase.ts ก่อน

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Clicksignup = () => setMode('signup');
  const Clicklogin = () => setMode('login');

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        alert(`ยินดีต้อนรับ ${user.displayName}`);

        // ส่ง user ไป Mainpage พร้อมข้อมูล
        navigate('/main', {
          state: {
            user: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            }
          }
        });
      })
      .catch((error) => {
        console.error('Google Login Error:', error);
      });
  };




  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100vh' }}>
      <div
        className="position-relative d-flex flex-column flex-md-row"
        style={{
          width: '100%',
          maxWidth: '900px',
          height: '600px',
          borderRadius: '30px',
          boxShadow: '0 4px 25px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          background: 'white'
        }}
      >

        {/* ส่วนรูปภาพ */}
        <div
          className="position-absolute"
          style={{
            top: 0,
            left: mode === 'login' ? '0' : '50%',
            width: '50%',
            height: '100%',
            zIndex: 2,
            transition: 'all 0.5s ease'
          }}
        >
          <img
            src={mode === 'login' ? logingirl : loginboy}
            alt="Login Visual"
            className="w-100 h-100"
            style={{
              objectFit: 'cover',
              objectPosition: mode === 'login' ? '-82px center' : '-160px center',
              transform: mode === 'signup' ? 'scaleX(-1)' : 'none',
              borderRadius: '30px',
            }}
          />
        </div>

        {/* ส่วนฟอร์ม */}
        <div
          className="position-absolute"
          style={{
            top: 0,
            left: mode === 'login' ? '50%' : '0%',
            width: '50%',
            height: '100%',
            zIndex: 1,
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            fontWeight: 'bold',
            fontSize: '24px',
            transition: 'all 0.5s ease'
          }}
        >
          <h1 className="fw-bold mb-4 text-primary text-center">
            {mode === 'login' ? 'SIGN IN' : 'Create Account'}
          </h1>

          <form style={{ width: '100%', maxWidth: '300px' }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
                <span
                  className="input-group-text"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </span>
              </div>
            </div>

            {mode === 'signup' && (
              <div className="mb-3">
                <label htmlFor="comfirmpassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-control"
                    id="comfirmpassword"
                    placeholder="Confirm your password"
                  />
                  <span
                    className="input-group-text"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </span>
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
              {mode === 'login' ? 'LOGIN' : 'SIGNUP'}
            </button>
          </form>
          <button
            type="button"
            className="btn btn-outline-dark w-80 d-flex align-items-center justify-content-center"
            onClick={handleGoogleLogin}
            style={{ marginTop: '10px' }}
          >
            <img
              src="https://services.google.com/fh/files/misc/google_g_icon_download.png"
              alt="Google"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            <span>Continue with Google</span>
          </button>



          <div className="text-center">
            {mode === 'login' ? (
              <span style={{ fontSize: '1rem' }}>
                Don’t have an account?{' '}
                <span onClick={Clicksignup} style={{ color: 'rgb(0, 76, 255)', cursor: 'pointer' }}>
                  Sign up
                </span>
              </span>
            ) : (
              <span style={{ fontSize: '1rem' }}>
                Already have an account?{' '}
                <span onClick={Clicklogin} style={{ color: 'rgb(0, 76, 255)', cursor: 'pointer' }}>
                  Login
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
