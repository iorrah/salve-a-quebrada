import React from 'react';

import LocaleToggle from 'containers/LocaleToggle';
import FooterStyled from './FooterStyled';
import Container from './Container';
import ToggleContainer from './ToggleContainer';
import A from './A';
import Copyright from './Copyright';

function Footer() {
  return (
    <FooterStyled>
      <Container className="container">
        <div>
          <A href="#">Termos</A>
          <A href="#">Privacidade</A>
        </div>

        <ToggleContainer>
          <LocaleToggle />
        </ToggleContainer>

        <div>
          <Copyright>© 2020 Salve Quebrada</Copyright>
        </div>

        <div>
          <A href="#">Twitter</A>
          <A href="#">Instagram</A>
        </div>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
