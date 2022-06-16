import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Frame } from './components/Frame';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div className="container-main">
      <Header />
      <Hero />
      <Frame />
      <Experience />
      <Contact />
      <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
