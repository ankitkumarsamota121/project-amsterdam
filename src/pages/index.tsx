import React from 'react';
import Navbar from '../components/marginals/Navbar';
import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Footer from '../components/marginals/Footer';

import Layout from '../layout';

import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Landing />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
