import '../assets/Projects.css';

import React from 'react';

function Projects() {
  return (
    <section className="projetos section" id="projetos">
      <div className="container">
        <h2 className="titulo">Projetos</h2>
        <p className="descricao">Abaixo alguns dos projetos que desenvolvi:</p>

        <ul className="projects-list">
          <li className="projects-item">
            <h2 className="titulo">Projeto Social</h2>
            <p className="descricao">
              Projeto social que eu tive o prazer de criar junto
              com algumas pessoas e conseguimos ajudar o próximo.
              Pratiquei CSS e HTML puro
            </p>
            <div className="links-group">
              <a
                href="https://abracandoasruasoficial.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Projeto <i className="fas fa-globe"></i>
                </button>
              </a>
              <a
                href="https://github.com/enascentedev/site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Repositório <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </li>

          <li className="projects-item">
            <h2 className="titulo">Quadra de Futsal</h2>
            <p className="descricao">
              Projeto de site que fiz para um amigo reaproveitando um outro projeto e
              adicionando outras funcionalidades, projeto está em evolução
            </p>
            <div className="links-group">
              <a
                href="https://bdgalvorada.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Projeto <i className="fab fa-chrome"></i>
                </button>
              </a>
              <a
                href="https://github.com/enascentedev/SiteBdgArena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Repositório <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </li>

          <li className="projects-item">
            <h2 className="titulo">Jogo de xadrez no CMD 🖥️</h2>
            <p className="descricao">
              Projeto na linguagem Java, foi praticado tratamento de exceções e POO
            </p>
            <div className="links-group">
              <a
                href="https://github.com/enascentedev/JogoXadrezCodigoComentado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Projeto <i className="fas fa-globe"></i>
                </button>
              </a>
              <a
                href="https://github.com/enascentedev/JogoXadrezCodigoComentado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">
                  Repositório <i className="fab fa-github"></i>
                </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
