import React from 'react';

const certifications = [
  ['DevOps Engineer Expert', 'Microsoft', '2022'],
  ['Azure Administrator Associate', 'Microsoft', '2022'],
  ['Azure Fundamentals', 'Microsoft', '2022'],
  ['NSM grunnprinsipper for IKT-sikkerhet', 'Nasjonal sikkerhetsmyndighet', '2022'],
];

export default function Certifications({ t }) {
  return (
    <section className="container detail-section" id="certifications-section" aria-labelledby="certifications-title">
      <div><h2 id="certifications-title">{t.certificationsTitle}</h2><p className="section-note">{t.certificationsNote}</p></div>
      <ul className="certification-list">
        {certifications.map(([title, issuer, year]) => (
          <li key={title}><div><h3>{title}</h3><p className="item-meta">{issuer}</p></div><span className="item-meta">{year}</span></li>
        ))}
      </ul>
    </section>
  );
}
