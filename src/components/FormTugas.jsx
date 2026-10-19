import { useState } from "react";

function FormTugas({ onTambahTugas }) {
  const [mataKuliah, setMataKuliah] = useState("");
  const [judul, setJudul] = useState("");
  const [deadline, setDeadline] = useState("");
  const [prioritas, setPrioritas] = useState("Sedang");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mataKuliah.trim() || !judul.trim() || !deadline) {
      alert("Harap isi semua field input sebelum menambahkan tugas.");
      return;
    }

    const tugasBaru = {
      id: Date.now(),
      mataKuliah: mataKuliah.trim(),
      judul: judul.trim(),
      deadline: deadline,
      prioritas: prioritas,
      selesai: false,
    };

    onTambahTugas(tugasBaru);

    // Reset input form
    setMataKuliah("");
    setJudul("");
    setDeadline("");
    setPrioritas("Sedang");
  };

  return (
    <section className="form-section">
      <h2>Tambah Tugas Baru</h2>
      <form onSubmit={handleSubmit} className="form-tugas">
        <div className="form-group">
          <label htmlFor="mataKuliah">Mata Kuliah</label>
          <input
            id="mataKuliah"
            type="text"
            placeholder="Contoh: Web Programming"
            value={mataKuliah}
            onChange={(e) => setMataKuliah(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="judul">Judul Tugas</label>
          <input
            id="judul"
            type="text"
            placeholder="Contoh: Modul 6 React Dasar"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="prioritas">Prioritas</label>
            <select
              id="prioritas"
              value={prioritas}
              onChange={(e) => setPrioritas(e.target.value)}
            >
              <option value="Rendah">Rendah</option>
              <option value="Sedang">Sedang</option>
              <option value="Tinggi">Tinggi</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-tambah">
          Tambah Tugas
        </button>
      </form>
    </section>
  );
}

export default FormTugas;
