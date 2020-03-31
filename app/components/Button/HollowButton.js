import styled from 'styled-components';
import { colors } from 'global-styles';
import buttonStyles from './buttonStyles';

const HollowButton = styled.button`
  ${buttonStyles};
  color: ${colors.primary};
  background-color: ${colors.white};
  border-color: ${colors.primary};

  &:hover {
    color: ${colors.primaryDarken};
    background-color: ${colors.white};
    border-color: ${colors.primaryDarken};
  }

  &:focus {
    color: ${colors.primaryDarken};
    background-color: ${colors.white};
    border-color: ${colors.primaryDarken};
  }
`;

export default HollowButton;
