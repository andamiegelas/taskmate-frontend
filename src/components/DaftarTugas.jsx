import KartuTugas from "./KartuTugas";

function DaftarTugas({ tugasList, onToggleSelesai, onHapus }) {
  return (
    <section className="daftar-section">
      <div className="section-header">
        <h2>Daftar Tugas Kuliah</h2>
        <span className="count-tag">{tugasList.length} Item</span>
      </div>

      {tugasList.length === 0 ? (
        <div className="empty-box">
          <p className="empty-text">Belum ada data tugas.</p>
        </div>
      ) : (
        <div className="grid-tugas">
          {tugasList.map((tugas) => (
            <KartuTugas
              key={tugas.id}
              tugas={tugas}
              onToggleSelesai={onToggleSelesai}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DaftarTugas;
