import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  margin: 0 0 1rem;

  @media (min-width: 576px) {
    font-size: 1.3rem;
    margin: 0 0 2rem;
  }
`;
