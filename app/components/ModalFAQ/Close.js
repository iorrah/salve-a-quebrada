import styled from 'styled-components';

export default styled.button`
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  width: 15px;

  &:focus {
    outline: transparent;
  }
`;
