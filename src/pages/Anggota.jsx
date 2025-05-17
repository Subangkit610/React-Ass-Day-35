import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Navbar diimpor

const Anggota = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // Menyimpan pengguna yang sudah difilter
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Menyimpan halaman saat ini
  const [totalPages, setTotalPages] = useState(2); // Jumlah total halaman

  // Mengambil data pengguna berdasarkan halaman yang aktif
  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json',
        },
      });

      setUsers(response.data.data); // Menyimpan data pengguna
      setFilteredUsers(response.data.data); // Menyimpan data untuk pencarian
      setTotalPages(response.data.total_pages); // Menyimpan jumlah halaman total
      setLoading(false); // Mengubah status loading
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage); // Mengambil data pengguna ketika halaman pertama kali dimuat
  }, [currentPage]);

  const handleSearch = (query) => {
    if (query) {
      const filtered = users.filter((user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users); // Jika tidak ada query, tampilkan semua pengguna
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Pindah ke halaman berikutnya
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Pindah ke halaman sebelumnya
    }
  };

  return (
    <div style={styles.anggotaContainer}>
      {/* Navbar dengan pencarian */}
      <Navbar onSearch={handleSearch} />

      <div style={styles.contentContainer}>
        <h1 style={styles.contentContainerH1}>Daftar Keanggotaan</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul style={styles.userList}>
            {filteredUsers.map((user) => (
              <li key={user.id} style={styles.userItem}>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name} Avatar`}
                  style={styles.userAvatar}
                />
                <div style={styles.userInfo}>
                  {/* Hover effect pada nama anggota */}
                  <h3 style={styles.userName}>{user.first_name} {user.last_name}</h3>
                  <p>Email: {user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination Controls */}
        <div style={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1} style={styles.paginationButton}>
            Sebelum
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} style={styles.paginationButton}>
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS in JS (const)
const styles = {
  anggotaContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fa',
    minHeight: '100vh', // Set minimum height to ensure full screen height
  },

  contentContainer: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },

  contentContainerH1: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },

  userList: {
    listStyleType: 'none',
    padding: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },

  userItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Adding smooth transition
    cursor: 'pointer',
    textAlign: 'left',
    position: 'relative',
  },

  userItemHover: {
    transform: 'scale(1.05)',  // Slight enlargement of user item on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',  // Enhance shadow effect on hover
  },

  userAvatar: {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    marginRight: '15px',
    transition: 'transform 0.3s ease', // Avatar scale transition
  },

  userAvatarHover: {
    transform: 'scale(1.1)', // Avatar grows on hover
  },

  userInfo: {
    textAlign: 'left',
  },

  userName: {
    fontSize: '22px',
    margin: '0',
    color: '#555',
    cursor: 'pointer',
    transition: 'color 0.3s ease, text-decoration 0.3s ease', // Smooth transition for hover
  },

  userNameHover: {
    color: '#007bff', // Change color on hover
    textDecoration: 'underline', // Add underline on hover
  },

  userInfoP: {
    fontSize: '14px',
    color: '#777',
  },

  pagination: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paginationButton: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Add transition to buttons
  },

  paginationButtonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },

  // Responsiveness
  '@media (max-width: 768px)': {
    contentContainer: {
      padding: '15px',
    },

    userItem: {
      padding: '15px',
    },

    userAvatar: {
      width: '50px',
      height: '50px',
    },
  },

  '@media (max-width: 600px)': {
    contentContainer: {
      padding: '10px',
    },

    userItem: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },

    userAvatar: {
      marginBottom: '10px',
    },

    userInfoH3: {
      fontSize: '18px',
    },

    userInfoP: {
      fontSize: '12px',
    },
  },
};

export default Anggota;
