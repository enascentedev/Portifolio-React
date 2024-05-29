import React from 'react';
import '../assets/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div>
        <h1 className="titulo">Emanuel Nascente</h1>
      </div>

      <ul className="redes-sociais">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/emanuel-nascente-3b36b122a/"
            target="_blank"
            alt="linkedin"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://twitter.com/EmanuelNascente"
            target="_blank"
            alt="twitter"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.instagram.com/emanuelnascente/"
            target="_blank"
            alt="instagram"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://github.com/enascentedev"
            target="_blank"
            alt="github"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-item">
          <a
            href="./docs/Emanuel Curriculo.pdf"
            target="_blank"
            alt="download CV"
            download
          >
            <i className="fas fa-download"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
