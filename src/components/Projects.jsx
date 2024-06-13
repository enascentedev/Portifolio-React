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
						<h2 class="titulo">Vida com deus 🖥️</h2>
						<p class="descricao">
							Este é um projeto full stack que demonstra a aplicação dos meus conhecimentos em desenvolvimento de software. O backend é construído em Node.js, enquanto o frontend utiliza Vue.js e Tailwind CSS. O projeto aborda a palavra de deus de uma maneira leve e compartilho alguns insigths de livros. Estou orgulhoso de alcançar 100 commits neste projeto.
						</p>
						<div className="links-group">
							<a
								href="https://tempoderefletir.netlify.app/login"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button type="button">
									Projeto <i className="fas fa-globe"></i>
								</button>
							</a>
							<a
								href="https://github.com/enascentedev/vida-com-deus"
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
						<h2 class="titulo">React-chatGpt 1 🖥️</h2>
						<p className="descricao">
							Este é um projeto full stack que utiliza React para o front-end e Java para o back-end. O projeto faz uso da API da OpenAI para responder às perguntas dos usuários com base nos dados do ChatGPT versão 4. Além disso, um seletor de temas que muda a aplicação
						</p>
						<div className="links-group">
							<a
								href="https://github.com/enascentedev/React-chatGpt-project-1"
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
						<h2 className="titulo">Cardápio restaurante 🖥️</h2>
						<p className="descricao">
							Projeto fullstack que explora tecnologias no back-end e front-end. Utiliza Java Spring Boot e PostgreSQL para banco de dados, com o Spring Data JPA facilitando a manipulação de dados e o Flyway para migrações do banco. No front-end, emprega React com TypeScript para robustez e Axios para requisições
						</p>
						<div className="links-group">
							<a
								href="https://github.com/enascentedev/Menu-Cardapios"
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
