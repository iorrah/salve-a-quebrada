import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const HollowButton = styled.button`
  ${buttonStyles};
  color: #007bff;
  background-color: white;
  border-color: #007bff;

  &:hover {
    color: #007bff;
    background-color: #f5f5f5;
    border-color: #007bff;
  }

  &:focus {
    color: #007bff;
    background-color: #f5f5f5;
    border-color: #007bff;
  }
`;

export default HollowButton;
