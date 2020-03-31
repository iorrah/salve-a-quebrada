import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const PrimaryButton = styled.button`
  ${buttonStyles};
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:focus {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

export default PrimaryButton;
