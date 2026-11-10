import React from 'react';
import publications from '../data/publications';

export default function Updates({ t, items = publications }) {
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <section className="container detail-section" id="updates-section" aria-labelledby="updates-title">
      <div><h2 id="updates-title">{t.updatesTitle}</h2><p className="section-note">{t.updatesIntro}</p></div>
      {sortedItems.length === 0 ? <p className="updates-empty">{t.updatesEmpty}</p> : (
        <div className="publication-list">
          {sortedItems.map(item => (
            <article className="publication" key={item.url}>
              <p className="item-meta"><span>{item.source}</span><span aria-hidden="true"> · </span><time dateTime={item.date}>{new Intl.DateTimeFormat(t.locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${item.date}T00:00:00Z`))}</time></p>
              <h3><a href={item.url} target="_blank" rel="noreferrer">{item.title}<span aria-hidden="true"> ↗</span></a></h3>
              {item.summary && <p className="publication-summary">{item.summary}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
