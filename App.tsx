import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
