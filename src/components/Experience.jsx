import '../assets/Experience.css';

import React from 'react';

function Experience() {
	return (
		<section className="experiencias section">
			<div className="container">
				<h1 className="titulo">Experiências</h1>
				<ul className="exp-list">
					<li>
						<h2>Web Global</h2>
						<h3>Desenvolvedor web</h3>
						<span >01/03/2023 até o momento</span>
						<p className="descricao">
							Participação ativa no desenvolvimento de um projeto
							fullstack de autenticação
							utilizando Vue.js 3, PHP e JWT, demonstrando
							habilidades tanto no frontend quanto no backend.
							Atualmente, focado no novo projeto da empresa,
							desempenhando um papel na parte frontend.
							Utilizando Vue.js 3 com Pinia para gerenciamento de
							estado, consumindo dados de APIs
							eficientemente através do Axios.
							Criação de layouts responsivos utilizando Tailwind CSS
							para garantir uma experiência de usuário
							otimizada.
							Colaboração efetiva com a equipe para alcançar metas e
							prazos, demonstrando habilidades de
							resolução de problemas e adaptabilidade.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Experience;
