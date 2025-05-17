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

### GitHub
https://github.com/Subangkit610/React-Ass-Day-35

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
