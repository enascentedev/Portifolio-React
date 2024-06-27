import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/GitPage.css';

function GitPage() {
	return (
		<div className='container'>
			<Carousel showThumbs={false} autoPlay infiniteLoop>
				<div className='box-image'>
					<img src="/image/html-1.jpg" alt="Imagem html 1" />
					<p className="legend">tags de html e seus tipos de uso</p>
				</div>
				<div>
					<img src="/image/html-2.jpg" alt="Imagem html 2" />
					<p className="legend">tags de html e seus tipos de uso</p>
				</div>
				<div>
					<img src="/image/html-3.jpg" alt="Imagem html 3" />
					<p className="legend">tags de html e seus tipos de uso</p>
				</div>
			</Carousel>
		</div>
	);
}

export default GitPage;
