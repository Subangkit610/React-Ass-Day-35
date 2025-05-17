# Komunitas Bangkit Aplikasi Web

## Deskripsi Proyek
Komunitas Bangkit adalah aplikasi web yang dirancang untuk memfasilitasi pengembangan dan pengelolaan anggota komunitas. Aplikasi ini memungkinkan pengguna untuk mendaftar, masuk, dan mengakses detail pribadi mereka, serta menyediakan fitur pencarian untuk memfilter pengguna berdasarkan nama mereka.

## Fitur

- **Registrasi**: Pengguna baru dapat mendaftar dengan email dan password mereka.
- **Login**: Pengguna yang sudah terdaftar dapat masuk ke akun mereka.
- **Detail Pengguna**: Pengguna dapat melihat detail profil mereka setelah login.
- **Daftar Anggota**: Tersedia daftar anggota komunitas yang dapat dicari.
- **Navbar**: Navigasi responsif yang menyesuaikan berdasarkan lokasi pengguna.

## Teknologi yang Digunakan
- **React**: Frontend aplikasi dibangun menggunakan React untuk pengalaman pengguna yang dinamis.
- **React Router**: Digunakan untuk routing dan navigasi antara halaman seperti Home, Registrasi, Login, dan Halaman Detail Pengguna.
- **Axios**: Klien HTTP berbasis promise yang digunakan untuk melakukan permintaan API untuk mengambil data pengguna dan menangani autentikasi.
- **Styled Components**: Styling inline digunakan untuk komponen UI untuk memastikan antarmuka yang bersih dan responsif.

## Komponen

### `Navbar.jsx`
Navbar yang menyediakan tautan ke bagian utama aplikasi: Beranda, Daftar Anggota, Login, dan Registrasi. Juga berisi input pencarian untuk memfilter pengguna saat berada di halaman daftar anggota.

### `HomePage.jsx`
Halaman utama yang menyambut pengguna ke platform Komunitas Bangkit dengan pesan pengantar dan tombol "Silahkan Masuk" yang mengarah ke daftar anggota.

### `Register.jsx`
Formulir yang memungkinkan pengguna membuat akun baru dengan menyediakan email, kata sandi, dan konfirmasi kata sandi. Termasuk validasi formulir dan pesan kesalahan.

### `Login.jsx`
Formulir login di mana pengguna dapat memasukkan email dan kata sandi untuk mengakses akun mereka. Login yang berhasil akan mengarahkan pengguna ke halaman Detail Pengguna.

### `UserDetail.jsx`
Menampilkan informasi rinci tentang pengguna, termasuk nama, email, dan foto profil mereka. Pengguna dapat kembali ke halaman utama.

### `Anggota.jsx`
Menampilkan daftar anggota komunitas yang diambil dari API. Mendukung pencarian dan pagination untuk menavigasi daftar anggota.

## Instruksi Pengaturan

### Prasyarat
- Node.js (v16 atau lebih baru)
- npm (v7 atau lebih baru)

### Langkah-langkah Menjalankan Secara Lokal
1. Clone repository ini:
   ```bash
   git clone https://github.com/your-repository/komunitas-bangkit.git
