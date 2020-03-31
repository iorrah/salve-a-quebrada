import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  margin: 0 0 0.7rem;

  @media (min-width: 576px) {
    font-size: 1.1rem;
    margin: 0 0 1.8rem;
  }
`;
