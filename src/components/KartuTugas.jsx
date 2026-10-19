function KartuTugas({ tugas, onToggleSelesai, onHapus }) {
  const getBadgeClass = (prioritas) => {
    if (prioritas === "Tinggi") return "badge badge-tinggi";
    if (prioritas === "Sedang") return "badge badge-sedang";
    return "badge badge-rendah";
  };

  return (
    <div className={`card-tugas ${tugas.selesai ? "tugas-selesai" : ""}`}>
      <div className="card-header">
        <span className="card-matkul">{tugas.mataKuliah}</span>
        <span className={getBadgeClass(tugas.prioritas)}>{tugas.prioritas}</span>
      </div>

      <h3 className="card-title">{tugas.judul}</h3>

      <div className="card-footer">
        <span className="card-deadline">Deadline: {tugas.deadline}</span>
        <div className="card-actions">
          <button
            type="button"
            className="btn-status"
            onClick={() => onToggleSelesai(tugas.id)}
          >
            {tugas.selesai ? "Tandai Belum" : "Selesai"}
          </button>
          <button
            type="button"
            className="btn-hapus"
            onClick={() => onHapus(tugas.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default KartuTugas;
