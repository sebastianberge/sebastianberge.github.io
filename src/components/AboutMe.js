import React from 'react';

export default function AboutMe({ t }) {
  return (
    <section className="hero container" id="aboutme-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{t.greeting}<br /><span>Sebastian</span><span className="title-dot">.</span></h1>
        <p className="hero-role">Cloud Architect | Senior Consultant | Technology Enthusiast</p>
        <p className="hero-intro">{t.intro}</p>
        <p className="hero-intro">{t.aboutText}</p>
        <a className="text-link" href="#social-section">{t.secondary} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="portrait-card">
        <img src="/images/sebavatar.png" alt={t.portrait} width="1488" height="1588" />
      </div>
    </section>
  );
}
