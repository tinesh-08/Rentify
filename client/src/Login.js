import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role: Rent or Sell');
      return;
    }
    try {
      const { data } = await axios.post('https://rentify-bim5.onrender.com/api/users/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify({ ...data, role }));
      if (role === 'buyer') {
        navigate('/');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.roleSelection}>
        <h5>You're here to sell or rent?</h5>
          <label>
            Rent
            <input
              type="checkbox"
              checked={role === 'buyer'}
              onChange={() => handleRoleSelection('buyer')}
            />
          </label>
          <label>
            Sell
            <input
              type="checkbox"
              checked={role === 'seller'}
              onChange={() => handleRoleSelection('seller')}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: "400px", marginLeft: "-100px" }}>
        New user? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
