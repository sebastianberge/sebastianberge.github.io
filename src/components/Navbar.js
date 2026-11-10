import React, { useState } from 'react';

export default function Navbar({ t, language, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const links = ['#aboutme-section', '#updates-section', '#cv-section', '#certifications-section', '#social-section'];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>sebastian<span className="brand-dot">.</span></a>
        <nav className={open ? 'navigation is-open' : 'navigation'} id="navigation" aria-label={language === 'no' ? 'Hovedmeny' : 'Main navigation'}>
          {t.nav.map((label, i) => <a key={links[i]} href={links[i]} onClick={() => setOpen(false)}>{label}{links[i] === '#social-section' && <span aria-hidden="true"> ↗</span>}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={onLanguageChange} aria-label={t.language}><span className={language === 'no' ? 'selected' : ''}>NO</span><span className="language-divider" aria-hidden="true">/</span><span className={language === 'en' ? 'selected' : ''}>EN</span></button>
          <button className="menu-button" aria-expanded={open} aria-controls="navigation" aria-label={open ? t.close : t.menu} onClick={() => setOpen(!open)} onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>{open ? '×' : '☰'}</button>
        </div>
      </div>
    </header>
  );
}
