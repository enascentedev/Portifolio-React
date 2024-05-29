import '../assets/About.css';

function About() {
	return (
		<div class='teste'>
			<nav class="menu-top">
				<section class="home">
					<div class="foto">
						<img src="/image/eu.jpg" alt='perfil' class='teste' />
					</div>
				</section>
			</nav>

			<section class="sobre-mim">
				<div class="container">
					<h2 class="titulo">
						Full Stack Developer
					</h2>
					<h2 class="titulo">Sobre Mim</h2>
					<p class="descricao">
						Oi, meu nome é Emanuel, tenho 31 anos formado em
						Análise e Desenvolvimento de Sistemas na Uniasselvi.
						Tenho uma paixão enorme por desenvolvimento web e aprender
						todos os dias.
					</p>
					<h2 class="titulo">Carreira Profissional</h2>
					<p class="descricao">
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
			<section class="habilidades">
        <div class="container">
          <h2 class="titulo">Habilidades e Conhecimentos</h2>
          <p class="descricao">
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

			<section class="conhecimentos">
        <div class="container">
          <h2 class="titulo">Conhecimentos Técnicos</h2>
          <ul class="conhecimentos-list">
            <li class="conhecimento-item">
              <span>
                <i class="fab fa-git-square"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-html5"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-css3-alt"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-js-square"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-node-js"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-react"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fas fa-database"></i>
                Básico
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-github"></i>
                Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-java"></i>
								Intermediário
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-php"></i>
                Básico
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-angular"></i>
                Básico
              </span>
            </li>

            <li class="conhecimento-item">
              <span>
                <i class="fab fa-linux"></i>
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