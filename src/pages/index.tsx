import React from 'react';
import Theme from '../components/theme';
import Landing from '../components/Landing';
import About from '../components/About';
import Navbar from '../components/marginals/Navbar';

import '../styles/global.css';

const Index = () => (
  <Theme>
    <Navbar />
    <Landing />
    <About />
  </Theme>
);

export default Index;
