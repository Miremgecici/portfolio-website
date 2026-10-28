'use client';

// Silme gibi geri alınamayan işlemlerden önce onay soran düğme.
export default function OnayliDugme({ children, mesaj = 'Bu kaydı silmek istediğinize emin misiniz?', className = 'btn danger sm' }) {
  return (
    <button
      type="submit"
      className={className}
      onClick={(e) => {
        if (!window.confirm(mesaj)) e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}
