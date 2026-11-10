import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import content from './content';

function App() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('sebastian-language') === 'en' ? 'en' : 'no'; }
    catch { return 'no'; }
  });
  const t = content[language];
  useEffect(() => {
    document.documentElement.lang = language === 'no' ? 'nb' : 'en';
    document.title = 'Sebastian Berge — Cloud & DevOps Engineer';
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.intro);
    try { localStorage.setItem('sebastian-language', language); } catch { /* Storage may be unavailable. */ }
  }, [language, t]);
  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <Navbar t={t} language={language} onLanguageChange={() => setLanguage(language === 'no' ? 'en' : 'no')} />
      <Home t={t} />
      <Footer t={t} />
    </>
  );
}
export default App;
