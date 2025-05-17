import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.content}>
        <h1>Selamat Datang di Komunitas Bangkit</h1>
        <p>"Bangkit adalah program yang dirancang untuk mengembangkan kompetensi siswa agar berkarir di dunia teknologi"</p>

        <div style={styles.buttonContainer}>
          <Link to="/anggota" style={styles.homeButton}>Silahkan Masuk</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url(src/assets/kantor.jpg)', // Gambar latar belakang
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  homeContainerH1: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  homeContainerP: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  homeButton: {
    textDecoration: 'none',
    padding: '15px 25px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  homeButtonHover: {
    backgroundColor: '#0056b3',
  },
  // Media Query
  '@media (max-width: 600px)': {
    homeContainer: {
      padding: '10px',
    },
    content: {
      padding: '20px',
    },
    homeContainerH1: {
      fontSize: '28px',
    },
    homeContainerP: {
      fontSize: '16px',
    },
    buttonContainer: {
      flexDirection: 'column',
    },
    homeButton: {
      marginBottom: '10px',
      padding: '12px 25px',
    },
  }
};

export default HomePage;
