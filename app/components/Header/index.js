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
import Hero from './Hero';
import Content from './Content';
import Title from './Title';
import SubTitle from './SubTitle';
import Input from './Input';

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

      <Hero>
        <Content>
          <Title>
            O seu lugar favorito na cidade pode fechar pra sempre. Ajude a
            salvá-lo.
          </Title>

          <SubTitle>
            Um vale-presente pode diminuir o prejuízo causado pelo COVID-19
          </SubTitle>

          <Input placeholder="Busque por lugares que você ama" type="text" />
        </Content>
      </Hero>
    </HeaderElement>
  );
}

export default Header;
