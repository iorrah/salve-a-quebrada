import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.p`
  color: ${colors.gray};
  font-size: 0.5rem;
  margin: 0;
  display: inline;

  @media (min-width: 576px) {
    font-size: 0.8rem;
  }
`;
