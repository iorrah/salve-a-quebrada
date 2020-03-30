import React from 'react';

import A from 'components/A';

import LocaleToggle from 'containers/LocaleToggle';
import FooterStyled from './FooterStyled';
import Container from './Container';

function Footer() {
  return (
    <FooterStyled>
      <Container className="container">
        <section>
          <A href="#">Termos</A> <A href="#">Privacidade</A>
        </section>

        <section>
          <LocaleToggle />
        </section>

        <section>c 2020 Salve Quebrada</section>

        <section>
          <i>Twitter</i> <i>Instagram</i>
        </section>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
