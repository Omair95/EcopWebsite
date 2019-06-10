import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Galeria from '../sections/Galeria';
import Preguntes from '../sections/Preguntes';
const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Preguntes />
    <Galeria />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
