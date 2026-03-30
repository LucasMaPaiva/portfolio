import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Diferenciais from './components/Diferenciais';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Diferenciais />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
