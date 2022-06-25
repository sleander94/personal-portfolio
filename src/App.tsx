import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
