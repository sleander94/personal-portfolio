import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let menu = document.querySelectorAll('nav a');
    const handleScroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 250;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
          menu.forEach((link) => {
            link.classList.remove('active');
            document
              .querySelector('nav a[href*=' + id + ']')!
              .classList.add('active');
          });
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
