import styled from 'styled-components';
import { colors } from 'global-styles';

const FooterStyled = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid ${colors.fog};
  background: ${colors.white};

  @media (min-width: 576px) {
    padding: 4rem 0;
  }
`;

export default FooterStyled;
