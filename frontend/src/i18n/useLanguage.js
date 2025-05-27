import { useState } from 'react';
import { translations } from './lang';

export const useLanguage = () => {
  const [lang, setLang] = useState('fr'); // padrão: francês (Québec)

  const t = (key) => translations[lang][key] || key;

  return { lang, setLang, t };
};
