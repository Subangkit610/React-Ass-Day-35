import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate untuk redirect
import axios from 'axios';
import Navbar from '../components/Navbar'; // Navbar diimpor

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Email or password is missing');
    } else {
      setErrorMessage(''); // Reset error message
      const payload = {
        email: email,
        password: password,
      };
      try {
        const response = await axios.post('https://reqres.in/api/login', payload, {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        });

        console.log(response);
        if (response.status === 200) {
          // Simpan ID pengguna ke localStorage (misalnya ID = 2)
          const userId = 4; // Misalnya ID pengguna yang didapat setelah login
          localStorage.setItem('user', JSON.stringify({
            email: email,
            password: password,
            userId: userId, // Menyimpan userId
          }));
          // Redirect ke halaman UserDetail dengan ID pengguna
          navigate(`/user-detail/${userId}`);
        }
      } catch (err) {
        // Penanganan error
        if (err.response) {
          // Jika respons error dari API
          if (err.response.data.error === 'invalid email or password') {
            setErrorMessage('Invalid email or password'); // Menampilkan pesan error jika email atau password salah
          } else {
            setErrorMessage('An error occurred. Please try again'); // Pesan error umum
          }
        } else {
          setErrorMessage('Network error. Please check your connection and try again.');
        }
        console.log(err);
      }
    }
  };

  // Mengecek apakah tombol login bisa diaktifkan atau tidak
  const isFormValid = email !== '' && password !== '';

  return (
    <div>
      <Navbar onSearch={() => {}} /> {/* Navbar di atas */}

      <div style={loginContainerStyles}>  {/* Menggunakan styles untuk form login */}
        <div style={cardStyles}>
          <h2 style={styles.cardTitle}>Login Member</h2>

          <form onSubmit={handleLogin}>
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
            {errorMessage && <p style={styles.error}>{errorMessage}</p>} {/* Menampilkan pesan error */}
            {/* Tombol Login dengan kondisi disabled */}
            <button 
              type="submit" 
              style={{ 
                ...styles.button, 
                backgroundColor: isFormValid ? '#4CAF50' : '#ccc', // Hijau jika valid, abu-abu jika tidak valid
                cursor: isFormValid ? 'pointer' : 'not-allowed' // Menonaktifkan klik jika form tidak valid
              }} 
              disabled={!isFormValid} // Menonaktifkan tombol jika form tidak valid
            >
              Login
            </button>
          </form>

          <p style={styles.registerLink}>
            Belum punya akun? <Link to="/register" style={styles.link}>Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Gaya untuk container yang menempatkan form login di bawah Navbar
const loginContainerStyles = {
  fontFamily: 'Arial',
  display: 'flex',
  justifyContent: 'center', // Menjajarkan elemen secara horizontal di tengah
  alignItems: 'center', // Menjajarkan elemen secara vertikal di tengah
  backgroundColor: '#grey',
  flexDirection: 'column', // Mengatur arah konten ke kolom
  minHeight: '100vh',
};

// Gaya untuk card (form login)
const cardStyles = {
  fontFamily: 'Arial',
  width: '350px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
};

// Gaya untuk elemen-elemen dalam form
const styles = {
  fontFamily: 'Arial',
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
    fontSize:'20px'
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

export default Login;
