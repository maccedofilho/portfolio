import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
