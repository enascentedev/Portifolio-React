import '../assets/About.css';

function About() {
	return (
		<div className='teste'>
			<nav className="menu-top">
				<section className="home">
					<div className="foto">
						<img src="/image/eu.jpg" alt='perfil' className='teste' />
					</div>
				</section>
			</nav>

			<section className="sobre-mim">
				<div className="container">
					<h2 className="titulo">
						Full Stack Developer
					</h2>
					<h2 className="subtitulo">Sobre Mim</h2>
					<p className="descricao">
						Oi, meu nome é Emanuel, tenho 31 anos formado em
						Análise e Desenvolvimento de Sistemas na Uniasselvi.
						Tenho uma paixão enorme por desenvolvimento web e aprender
						todos os dias.
					</p>
					<h2 className="subtitulo">Carreira Profissional</h2>
					<p className="descricao">
						Na minha área antiga, comecei porque sempre gostei de solucionar problemas.
						Comecei cursando o curso técnico de mecânica, depois comecei a cursar engenharia
						e acabei trancando o curso por que vi que o Engenheiro de hoje em dia, não soluciona
						problemas e sim os delega para outras áreas. Sempre trabalhei no ramo de manutenção e
						vi o crescimento da indústria de perto, através disso fui buscar conhecimento e fiz o
						curso de eletrônica, nesse momento me apaixonei pela programação e vi que era a área
						que me sinto mais á vontade. Comecei a faculdade de análise e desenvolvimento de sistemas
						e vi que é o que eu sempre sonhei, resolver problemas e trazer soluções.
					</p>
				</div>
			</section>
			<section className="habilidades">
        <div className="container">
          <h2 className="titulo">Habilidades e Conhecimentos</h2>
          <p className="descricao">
            Para se manter e desenvolver habilidades na área de TI é preciso
            resiliência, se eu estou aqui até hoje é porque eu precisei aprender
            a não desistir e sempre seguir em frente. O que me encantou na área
            de desenvolvimento é a possibilidade de poder explorar minha
            criatividade, pensar fora da caixinha e desenvolver novas
            habilidades criativas pensando sempre em uma nova forma de fazer
            algo antigo.
            Preciso estar aprendendo e melhorando alguma habilidade pra mim isso
            vai além de ser um bom profissional, eu acredito que cada dia a
            gente tem a oportunidade de se tornar a nossa melhor versão e isso
            reflete em todas as áreas da nossa vida.
          </p>
        </div>
      </section>

			<section className="conhecimentos">
        <div className="container">
          <h2 className="titulo">Conhecimentos Técnicos</h2>
          <ul className="conhecimentos-list">
            <li className="conhecimento-item">
              <span>
                <i className="fab fa-git-square"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-html5"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-css3-alt"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-js-square"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-node-js"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-react"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fas fa-database"></i>
                Básico
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-github"></i>
                Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-java"></i>
								Intermediário
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-php"></i>
                Básico
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-angular"></i>
                Básico
              </span>
            </li>

            <li className="conhecimento-item">
              <span>
                <i className="fab fa-linux"></i>
                Básico
              </span>
            </li>
          </ul>
        </div>
      </section>
		</div>
	);
}

export default About;