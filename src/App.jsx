import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Anggota from './pages/Anggota'; // Mengimpor komponen Anggota
import UserDetail from './pages/UserDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anggota" element={<Anggota />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
