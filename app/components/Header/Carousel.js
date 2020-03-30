import React from 'react';
import Slider from 'react-slick';

import Hero01 from 'images/hero-01.png';
import Hero02 from 'images/hero-02.png';
import Hero03 from 'images/hero-03.png';
import Hero04 from 'images/hero-04.png';

import Img from './Img';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
};

function Carousel() {
  return (
    <Slider {...settings}>
      <div>
        <Img src={Hero01} alt="Imagem Restaurante Vazio 01" />
      </div>

      <div>
        <Img src={Hero02} alt="Imagem Restaurante Vazio 02" />
      </div>

      <div>
        <Img src={Hero03} alt="Imagem Restaurante Vazio 03" />
      </div>

      <div>
        <Img src={Hero04} alt="Imagem Restaurante Vazio 04" />
      </div>
    </Slider>
  );
}

export default Carousel;
