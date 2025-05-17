import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.activeLink : styles.link;
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.leftSection}>
        <h1 style={styles.communityName}>Komunitas Bangkit</h1>
      </div>

      <div style={styles.rightSection}>
        <Link to="/" style={isActive('/')}>Beranda</Link>
        <Link to="/anggota" style={isActive('/anggota')}>Anggota</Link>
        <Link to="/login" style={isActive('/login')}>Login</Link>
        <Link to="/register" style={{ ...isActive('/register'), paddingRight: '15px' }}>Daftar</Link>
        {location.pathname === "/anggota" &&  
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search Users..."
              value={query}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>
        }
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    width: '100%',  // Jika sebelumnya ada lebar tetap, ubah menjadi '100%' atau 'auto'
    backgroundColor: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
    fontFamily: 'Arial',
  },
  leftSection: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20px', // Mengurangi padding jika terlalu besar
  },
  communityName: {
    color: '#4CAF50', // Warna hijau
    fontWeight: 'bold',
    fontSize: '24px',
  },
  link: {
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
    color: '#fff',
    fontWeight: 'bold',
  },
  activeLink: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '8px 12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginLeft: '15px',
    width: '60%',
  },
};

export default Navbar;

