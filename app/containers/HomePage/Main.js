import styled from 'styled-components';
import { colors } from 'global-styles';

const Main = styled.main`
  background-color: ${colors.cloud};
  padding: 2rem 0 3rem;

  @media (min-width: 576px) {
    padding: 4.5rem 0 5rem;
  }
`;

export default Main;
