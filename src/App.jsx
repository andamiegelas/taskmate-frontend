import { useState } from "react";
import Header from "./components/Header";
import RingkasanTugas from "./components/RingkasanTugas";
import FormTugas from "./components/FormTugas";
import DaftarTugas from "./components/DaftarTugas";
import "./App.css";

const DATA_AWAL_TUGAS = [
  {
    id: 1,
    mataKuliah: "Web Programming",
    judul: "Implementasi Modul 6 React Dasar",
    deadline: "2026-10-25",
    prioritas: "Tinggi",
    selesai: false,
  },
  {
    id: 2,
    mataKuliah: "Rekayasa Kebutuhan PL",
    judul: "Finalisasi Dokumen Software Requirements Specification (SRS)",
    deadline: "2026-10-28",
    prioritas: "Sedang",
    selesai: false,
  },
  {
    id: 3,
    mataKuliah: "Basis Data Lanjut",
    judul: "Praktikum Query Join dan Indexing PostgreSQL",
    deadline: "2026-10-22",
    prioritas: "Rendah",
    selesai: true,
  },
];

function App() {
  const [tugasList, setTugasList] = useState(DATA_AWAL_TUGAS);

  const handleTambahTugas = (tugasBaru) => {
    setTugasList((prev) => [tugasBaru, ...prev]);
  };

  const handleToggleSelesai = (id) => {
    setTugasList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t))
    );
  };

  const handleHapusTugas = (id) => {
    setTugasList((prev) => prev.filter((t) => t.id !== id));
  };

  const handleKosongkanSemua = () => {
    setTugasList([]);
  };

  const handleResetDataAwal = () => {
    setTugasList(DATA_AWAL_TUGAS);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <RingkasanTugas tugasList={tugasList} />

        <div className="layout-grid">
          <aside className="sidebar-form">
            <FormTugas onTambahTugas={handleTambahTugas} />

            <div className="util-actions">
              <button
                type="button"
                className="btn-util btn-danger-soft"
                onClick={handleKosongkanSemua}
              >
                Kosongkan Data (Uji State Kosong)
              </button>
              <button
                type="button"
                className="btn-util btn-secondary-soft"
                onClick={handleResetDataAwal}
              >
                Reset Data Awal
              </button>
            </div>
          </aside>

          <section className="content-list">
            <DaftarTugas
              tugasList={tugasList}
              onToggleSelesai={handleToggleSelesai}
              onHapus={handleHapusTugas}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
