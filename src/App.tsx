import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
