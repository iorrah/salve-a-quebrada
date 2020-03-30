import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'styles.scss';

import Button from 'components/Button';

import Container from './Container';
import Carousel from './Carousel';
import NavBar from './NavBar';
import HeaderElement from './HeaderElement';
import HeaderLink from './HeaderLink';
import Logo from './Logo';

function Header() {
  return (
    <HeaderElement>
      <Carousel />

      <NavBar>
        <Container className="container">
          <Logo to="/">Salve a Quebrada</Logo>

          <div>
            <HeaderLink to="/">Como funciona?</HeaderLink>
            <Button onClick={() => {}}>Adicionar Local</Button>
          </div>
        </Container>
      </NavBar>
    </HeaderElement>
  );
}

export default Header;
