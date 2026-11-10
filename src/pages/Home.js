import React from 'react';
import AboutMe from '../components/AboutMe';
import CV from '../components/CV';
import Social from '../components/Social';
import Certifications from '../components/Certifications';
import Updates from '../components/Updates';
export default function Home({ t }) {
  return <main id="main"><AboutMe t={t} /><Updates t={t} /><CV t={t} /><Certifications t={t} /><Social t={t} /></main>;
}
