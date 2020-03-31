import React from 'react';

import LocaleToggle from 'containers/LocaleToggle';
import FooterStyled from './FooterStyled';
import Container from './Container';
import ToggleContainer from './ToggleContainer';
import A from './A';
import Copyright from './Copyright';
import SocialContainer from './SocialContainer';

function Footer() {
  return (
    <FooterStyled>
      <Container className="container">
        <section>
          <A href="#">Termos</A>
          <A href="#">Privacidade</A>
        </section>

        <ToggleContainer>
          <LocaleToggle />
        </ToggleContainer>

        <Copyright>© 2020 Salve Quebrada</Copyright>

        <SocialContainer>
          <A href="#">Twitter</A>
          <A href="#">Instagram</A>
        </SocialContainer>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
