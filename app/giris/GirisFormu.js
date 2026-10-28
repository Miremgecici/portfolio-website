'use client';

import { useActionState } from 'react';
import { girisYap } from './actions';

export default function GirisFormu() {
  const [durum, gonder, bekliyor] = useActionState(girisYap, null);

  return (
    <form action={gonder} className="form">
      {durum?.hata && <div className="alert error" role="alert">{durum.hata}</div>}
      <div className="field">
        <label htmlFor="eposta">E-posta</label>
        <input id="eposta" name="eposta" type="email" required autoComplete="username" />
      </div>
      <div className="field">
        <label htmlFor="sifre">Şifre</label>
        <input id="sifre" name="sifre" type="password" required autoComplete="current-password" />
      </div>
      <button type="submit" className="btn accent" disabled={bekliyor}>
        {bekliyor ? 'Kontrol ediliyor…' : 'Giriş yap'}
      </button>
    </form>
  );
}
