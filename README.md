# TaskMate - Student Task Tracker (Frontend React)

Tugas Perkuliahan Bab 6: React Dasar  
Nama: Mikdam Huda Nurhayat  
NIM: 1302223034  
Program Studi: S1 Rekayasa Perangkat Lunak, Telkom University  

---

## Deskripsi Aplikasi

TaskMate adalah aplikasi web frontend berbasis React untuk mencatat dan mengelola tugas-tugas perkuliahan mahasiswa, deadline, serta prioritas pengerjaan. Aplikasi ini dibangun menggunakan Vite sebagai kerangka dasar yang nantinya akan dihubungkan ke backend API.

## Struktur Komponen

Aplikasi terdiri dari minimal 5 komponen terpisah di folder `src/components/`:

1. `Header.jsx`: Menampilkan nama aplikasi, sub-judul, dan identitas mahasiswa.
2. `RingkasanTugas.jsx`: Menampilkan ringkasan metrik (total tugas, status selesai, belum selesai, dan tugas prioritas tinggi).
3. `FormTugas.jsx`: Form input (controlled component) untuk menambahkan tugas baru (mata kuliah, judul tugas, deadline, dan prioritas).
4. `DaftarTugas.jsx`: Menampilkan list data menggunakan `.map()` dengan key unik dan conditional rendering ketika daftar tugas kosong ("Belum ada data tugas.").
5. `KartuTugas.jsx`: Komponen kartu untuk tiap item tugas yang menerima data melalui props dan menyediakan aksi tandai selesai atau hapus.

## Cara Menjalankan

1. Clone repository:
   ```bash
   git clone https://github.com/andamiegelas/taskmate-frontend.git
   cd taskmate-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka di browser pada alamat `http://localhost:5173`.

## Bukti Pengerjaan (Screenshots)

Screenshot tahapan pengerjaan tersimpan di folder `docs/screenshots/`:
- `01_instalasi_vite_awal.png`: Bukti instalasi awal Vite berjalan di localhost:5173
- `02_tampilan_utama_dan_data.png`: Tampilan awal aplikasi dengan data tugas realistis
- `03_form_input_terisi.png`: Form input controlled component saat diisi
- `04_tugas_baru_berhasil_ditambah.png`: Hasil penambahan data tugas baru ke daftar
- `05_conditional_rendering_data_kosong.png`: Conditional rendering saat tidak ada data tugas
