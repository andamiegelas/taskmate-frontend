function RingkasanTugas({ tugasList }) {
  const totalTugas = tugasList.length;
  const tugasSelesai = tugasList.filter((t) => t.selesai).length;
  const tugasBelum = totalTugas - tugasSelesai;
  const prioritasTinggi = tugasList.filter((t) => t.prioritas === "Tinggi" && !t.selesai).length;

  return (
    <section className="ringkasan-container">
      <div className="stat-card">
        <span className="stat-label">Total Tugas</span>
        <strong className="stat-value">{totalTugas}</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">Belum Selesai</span>
        <strong className="stat-value">{tugasBelum}</strong>
      </div>
      <div className="stat-card">
        <span className="stat-label">Sudah Selesai</span>
        <strong className="stat-value">{tugasSelesai}</strong>
      </div>
      <div className="stat-card stat-alert">
        <span className="stat-label">Prioritas Tinggi</span>
        <strong className="stat-value">{prioritasTinggi}</strong>
      </div>
    </section>
  );
}

export default RingkasanTugas;
