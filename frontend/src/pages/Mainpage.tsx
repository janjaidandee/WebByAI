import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Mainpage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    // ถ้าไม่มี user กลับไปหน้า Login
    navigate('/');
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '100vh' }}>
      <div className="card p-5 text-center shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <img
          src={user.photoURL}
          alt="Profile"
          className="rounded-circle mx-auto mb-3"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <h4 className="mb-2 text-success">Login สำเร็จ 🎉</h4>
        <p className="mb-1"><strong>ชื่อ:</strong> {user.displayName}</p>
        <p className="mb-0"><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Mainpage;
