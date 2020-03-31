import styled from 'styled-components';
import { colors } from 'global-styles';
import buttonStyles from './buttonStyles';

const PrimaryButton = styled.button`
  ${buttonStyles};
  color: ${colors.white};
  background-color: ${colors.primary};
  border-color: ${colors.primary};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.primaryDarken};
    border-color: ${colors.primaryDarken};
  }

  &:focus {
    color: ${colors.white};
    background-color: ${colors.primaryDarken};
    border-color: ${colors.primaryDarken};
  }
`;

export default PrimaryButton;
