import styled from 'styled-components';
import { colors } from 'global-styles';

const Button = styled.button`
  color: ${colors.primary};
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;

  &:hover,
  &:focus {
    color: ${colors.primaryDarken};
    outline: transparent;
  }
`;

export default Button;
