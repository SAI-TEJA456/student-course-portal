
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/users/email/${email}`);
      if (res.data.password === password) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('User not found');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
