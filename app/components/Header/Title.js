import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.h1`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 0.5rem;

  @media (min-width: 576px) {
    font-size: 2.2rem;
  }
`;
