import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './assets/App.css';

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="App">
        <h1>Portifolio Emanuel</h1>
        <Header />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
