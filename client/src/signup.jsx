import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import backgroundImage from './assets/Lavender-Farms-in-Ontario-for-a-Day-Trip.webp';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      await userCredential.user.updateProfile({
        displayName: name
      });
      console.log('User profile updated with name:', name);
      console.log('Navigating to login page...');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please choose a different one.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters long.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="signup-box p-3 rounded w-25" style={{ backgroundColor: 'rgba(128,0,128,0.8)', color: 'white', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}>
        <h2 className="mb-4 text-center text-uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: '10px', border: '1px solid #ccc' }}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-success w-100 rounded-0 mb-3" style={{ borderRadius: '10px', boxShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Register</button>
        </form>
                <p className="mb-2 text-center">Already have an account?</p>
                <Link to="/login" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
