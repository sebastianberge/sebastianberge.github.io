import React from 'react';

export default function Footer({ t }) {
  return <footer className="container footer"><p>© {new Date().getFullYear()} Sebastian Berge</p><a className="back-top" href="#top">{t.top} ↑</a></footer>;
}

