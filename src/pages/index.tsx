import React from 'react';
import Theme from '../components/theme';
import Landing from '../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Navbar from '../components/marginals/Navbar';

import '../styles/global.css';
import Projects from '../components/Projects';

const Index = () => (
  <Theme>
    <Navbar />
    <Landing />
    <About />
    <Skills />
    <Projects />
  </Theme>
);

export default Index;
