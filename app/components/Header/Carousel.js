import React from 'react';
import Slider from 'react-slick';

import HeroDesktop01 from 'images/desktop/hero-01.png';
import HeroDesktop02 from 'images/desktop/hero-02.png';
import HeroDesktop03 from 'images/desktop/hero-03.png';
import HeroDesktop04 from 'images/desktop/hero-04.png';

import HeroTablet01 from 'images/tablet/hero-01.png';
import HeroTablet02 from 'images/tablet/hero-02.png';
import HeroTablet03 from 'images/tablet/hero-03.png';
import HeroTablet04 from 'images/tablet/hero-04.png';

import HeroMobile01 from 'images/mobile/hero-01.png';
import HeroMobile02 from 'images/mobile/hero-02.png';
import HeroMobile03 from 'images/mobile/hero-03.png';
import HeroMobile04 from 'images/mobile/hero-04.png';

import ImgDesktop from './ImgDesktop';
import ImgTablet from './ImgTablet';
import ImgMobile from './ImgMobile';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  arrows: false,
};

function Carousel() {
  return (
    <Slider {...settings}>
      <div>
        <ImgDesktop src={HeroDesktop01} alt="Imagem Restaurante Vazio 01 (D)" />
        <ImgTablet src={HeroTablet01} alt="Imagem Restaurante Vazio 01 (T)" />
        <ImgMobile src={HeroMobile01} alt="Imagem Restaurante Vazio 01 (M)" />
      </div>

      <div>
        <ImgDesktop src={HeroDesktop02} alt="Imagem Restaurante Vazio 02 (D)" />
        <ImgTablet src={HeroTablet02} alt="Imagem Restaurante Vazio 02 (T)" />
        <ImgMobile src={HeroMobile02} alt="Imagem Restaurante Vazio 02 (M)" />
      </div>

      <div>
        <ImgDesktop src={HeroDesktop03} alt="Imagem Restaurante Vazio 03 (D)" />
        <ImgTablet src={HeroTablet03} alt="Imagem Restaurante Vazio 03 (T)" />
        <ImgMobile src={HeroMobile03} alt="Imagem Restaurante Vazio 03 (M)" />
      </div>

      <div>
        <ImgDesktop src={HeroDesktop04} alt="Imagem Restaurante Vazio 04 (D)" />
        <ImgTablet src={HeroTablet04} alt="Imagem Restaurante Vazio 04 (T)" />
        <ImgMobile src={HeroMobile04} alt="Imagem Restaurante Vazio 04 (M)" />
      </div>
    </Slider>
  );
}

export default Carousel;
