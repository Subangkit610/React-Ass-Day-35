import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Import Navbar
import { useNavigate, useParams } from "react-router-dom"; // Mengimpor useNavigate dan useParams

const UserDetail = () => {
  const { id } = useParams(); // Mengambil ID pengguna dari URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Error handling
  const navigate = useNavigate(); // Fungsi navigasi

  // Fungsi untuk mengambil data pengguna berdasarkan ID
  const getUserDetail = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1'); // Mengambil data pengguna
      const users = response.data.data; // Menyimpan daftar pengguna

      // Cek apakah ID yang dicari ada dalam data pengguna
      const foundUser = users.find(user => user.id === parseInt(id));

      if (foundUser) {
        setUser(foundUser); // Menyimpan data pengguna yang ditemukan
      } else {
        setError("User not found"); // Jika pengguna tidak ditemukan
      }
      setLoading(false); // Menandakan selesai mengambil data
    } catch (error) {
      console.log(error);
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetail(); // Panggil fungsi getUserDetail saat komponen dimuat
  }, [id]);

  // Fungsi untuk kembali ke halaman utama (HomePage)
  const handleBack = () => {
    navigate('/'); // Mengarahkan ke halaman utama (HomePage)
  };

  return (
    <div style={containerStyles}>
      {/* Memanggil Navbar */}
      <Navbar onSearch={() => {}} /> {/* Navbar dengan pencarian */}

      <div style={cardStyles}>
        <h2 style={styles.cardTitle}>User Detail</h2>
        
        <button onClick={handleBack} style={styles.button}>Back to Home</button>

        {/* Menampilkan pesan loading jika data sedang diambil */}
        {loading && <p>Loading...</p>}

        {/* Menampilkan error jika ada */}
        {error && <p>{error}</p>}

        {/* Menampilkan detail pengguna jika sudah ada */}
        {user && !loading && !error && (
          <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width={200} height={200} />
            <p>Email: {user.email}</p>
            <p>Status: Active</p> {/* Misalnya status selalu aktif */}
          </div>
        )}
      </div>
    </div>
  );
};

// Styling untuk menempatkan konten di tengah
const containerStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f7fa',
  minHeight: '100vh', // Pastikan halaman penuh
  display: 'flex', // Gunakan Flexbox untuk menata elemen
  justifyContent: 'center', // Menjajarkan elemen secara horizontal di tengah
  alignItems: 'center', // Menjajarkan elemen secara vertikal di tengah
  flexDirection: 'column', // Mengatur arah konten ke kolom
  marginTop: '80px', // Memberi jarak agar tidak menempel pada navbar
};

// Styling untuk card (form user detail)
const cardStyles = {
  width: '350px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '30px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
};

const styles = {
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
};

export default UserDetail;
