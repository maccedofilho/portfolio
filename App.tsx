import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Work />
          <About />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;