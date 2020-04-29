import React from 'react';

import LocaleToggle from 'containers/LocaleToggle';
import FooterStyled from './FooterStyled';
import Container from './Container';
import ToggleContainer from './ToggleContainer';
import A from './A';
import Copyright from './Copyright';

function Footer() {
  const email = 'oi@salveaquebrada.org';
  const emailLink = `mailto:${email}`;

  return (
    <FooterStyled>
      <Container className="container">
        <div>
          <A href="/terms">Termos</A>
          <A href="#">Privacidade</A>
        </div>

        <ToggleContainer>
          <LocaleToggle />
        </ToggleContainer>

        <div>
          <Copyright>© 2020 Salve Quebrada</Copyright>
        </div>

        <div>
          <A href="https://github.com/iorrah/salve-a-quebrada" target="_blank">
            GitHub
          </A>

          <A
            href={emailLink}
            target="_blank"
            title="Abrir seu serviço de E-mail"
          >
            {email}
          </A>
        </div>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
