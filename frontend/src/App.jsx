import React from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import { useLanguage } from './i18n/useLanguage';

function App() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">{t("title")}</h1>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded p-1">
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>

      <AppointmentForm t={t} />
      <AppointmentList t={t} />
    </div>
  );
}

export default App;
