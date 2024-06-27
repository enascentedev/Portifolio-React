import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/GitPage.css';

function GitPage() {
  return (
    <div className='container'>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className='box-image'>
					<div>
						<img src="/image/git-1.jpg" alt="Imagem 1" />
					</div>
         
          <p className="legend">Formatação do perfil do github com números de commits</p>
        </div>
        <div>
          <img src="/image/git-2.jpg" alt="Imagem 2" />
          <p className="legend">Gráficos e skill que trabalho</p>
        </div>
        <div>
          <img src="/image/git-3.jpg" alt="Imagem 3" />
          <p className="legend">Repositório com várias branchs</p>
        </div>
        
      </Carousel>
    </div>
  );
}

export default GitPage;
