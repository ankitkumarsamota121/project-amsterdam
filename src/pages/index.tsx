import React from 'react';
import Theme from '../components/theme';
import Navbar from '../components/marginals/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/marginals/Footer';
import SEO from '../components/seo';

import '../styles/global.css';

const Index = () => (
  <>
    <SEO title="Ankit Samota" />
    <Theme>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Theme>
  </>
);

export default Index;
