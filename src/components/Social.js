import React from 'react';

export default function Social({ t }) {
  return (
    <section className="container contact-section" id="social-section" aria-labelledby="contact-title">
      <div><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactText}</p></div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/sebastian-berge-05b53548/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/sebastianberge" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
