// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitPage from './pages/GitPage';
import HtmlPage from './pages/HtmlPage';
import './assets/App.css';

function App() {
  return (
    <Router>
      <div className="background"></div>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/git" element={<GitPage />} /> {/* Adicione a rota para GitPage */}
          <Route path="/html" element={<HtmlPage />} /> {/* Adicione a rota para GitPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
