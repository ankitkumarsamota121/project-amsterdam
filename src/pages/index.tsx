import React from 'react';
import Theme from '../components/theme';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';

import '../styles/global.css';

const Index = () => (
  <Theme>
    <LandingPage />
    <AboutPage />
  </Theme>
);

export default Index;
