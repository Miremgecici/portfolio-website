// Ekleme ve düzenleme için ortak form (sunucu bileşeni).
export default function TasarimFormu({ action, turler, t = {}, dugme }) {
  return (
    <form action={action} className="form">
      {t.id && <input type="hidden" name="id" value={t.id} />}

      <div className="field">
        <label htmlFor="baslik">Başlık *</label>
        <input id="baslik" name="baslik" type="text" required maxLength={200} defaultValue={t.baslik ?? ''} />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="kategori_id">Tür</label>
          <select id="kategori_id" name="kategori_id" defaultValue={t.kategori_id ?? ''}>
            <option value="">— Seçilmedi —</option>
            {turler.map((k) => <option key={k.id} value={k.id}>{k.ad}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="musteri">Müşteri</label>
          <input id="musteri" name="musteri" type="text" maxLength={120} defaultValue={t.musteri ?? ''} placeholder="Kişisel çalışma ise boş bırakın" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="gorsel_url">Görsel adresi</label>
        <input id="gorsel_url" name="gorsel_url" type="text" maxLength={500} defaultValue={t.gorsel_url ?? ''} placeholder="/tasarimlar/afis.png veya https://…" />
        <span className="hint">Görseli projede public/tasarimlar/ klasörüne koyup /tasarimlar/dosya.png yazabilirsiniz.</span>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="tarih">Tarih</label>
          <input id="tarih" name="tarih" type="date" defaultValue={t.tarih_str ?? ''} />
        </div>
        <div className="field">
          <label htmlFor="sure_saat">Süre (saat)</label>
          <input id="sure_saat" name="sure_saat" type="number" min={0} max={10000} step={1} defaultValue={t.sure_saat ?? ''} />
        </div>
      </div>

      <label className="check">
        <input type="checkbox" name="musteri_izni" defaultChecked={t.musteri_izni ?? false} />
        <span>Müşteri portfolyoda yayımlanmasına izin verdi (izin yoksa sitede görünmez)</span>
      </label>
      <label className="check">
        <input type="checkbox" name="yayinda" defaultChecked={t.yayinda ?? true} />
        <span>Yayında</span>
      </label>

      <div><button type="submit" className="btn accent">{dugme}</button></div>
    </form>
  );
}
