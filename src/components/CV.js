import React from 'react';

export default function CV({ t }) {
  return (
    <section className="container experience-section" id="cv-section" aria-labelledby="experience-title">
      <h2 id="experience-title">{t.experienceTitle}</h2>
      <div className="experience-list">
        {t.jobs.map(([start, end, title, company]) => (
          <article className="job" key={company}>
            <p className="job-dates">{start} — {end}</p>
            <div><h3>{title}</h3><p className="company">{company}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
