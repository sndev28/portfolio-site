import React from 'react';
import './App.css';
import About from './components/About';
import Canvas from './components/Canvas';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Navbar />
        <Canvas />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Connect />
        <Footer />

      </div>
    </div>
  );
}

export default App;
