import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Hero01 from 'images/hero-01.png';
import Hero02 from 'images/hero-02.png';
import Hero03 from 'images/hero-03.png';
import Hero04 from 'images/hero-04.png';

import 'styles.scss';

import Button from 'components/Button';
import Img from './Img';
import NavBar from './NavBar';
import HeaderElement from './HeaderElement';
import HeaderLink from './HeaderLink';
import Logo from './Logo';

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

function Header() {
  return (
    <HeaderElement>
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

      <NavBar>
        <Logo to="/">Salve a Quebrada</Logo>

        <div className="header__wrapper-left">
          <HeaderLink to="/">Como funciona?</HeaderLink>
          <Button onClick={() => {}}>Adicionar Local</Button>
        </div>
      </NavBar>
    </HeaderElement>
  );
}

export default Header;
