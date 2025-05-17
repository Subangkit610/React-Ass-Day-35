import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';  // Import Navbar Component

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      setErrorMessage('Email or password is missing');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      const payload = { email, password };
      try {
        const response = await axios.post('https://reqres.in/api/register', payload, {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        });
        console.log(response);
        alert('Registration successful!');
        navigate('/login');
      } catch (err) {
        setErrorMessage('Failed to register, please try again');
        console.log(err);
      }
    }
  };

  const isFormValid = email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword;

  return (
    <div style={styles.container}>
      <Navbar onSearch={() => {}} /> {/* Reusing Navbar component */}

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Daftar Member</h2>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
          <button 
            type="submit" 
            style={{
              ...styles.button, 
              backgroundColor: isFormValid ? '#4CAF50' : '#ccc',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
            }} 
            disabled={!isFormValid}
          >
            Daftar
          </button>
        </form>

        <p style={styles.registerLink}>
          Sudah Punya Akun? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '90px', // Add space from Navbar
  },

  card: {
    width: '350px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  },

  cardTitle: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
  },

  input: {
    width: '90%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '3px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  },

  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },

  error: {
    color: 'red',
    fontSize: '14px',
  },

  registerLink: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#555',
  },

  link: {
    textDecoration: 'none',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
};

export default Register;
