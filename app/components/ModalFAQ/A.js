import styled from 'styled-components';
import { colors } from 'global-styles';

const A = styled.a`
  color: ${colors.primary};
  text-decoration: none;

  &:hover,
  &:visited {
    color: ${colors.primaryDarken};
    text-decoration: none;
  }
`;

export default A;
