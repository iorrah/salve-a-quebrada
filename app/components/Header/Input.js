import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.input`
  height: 0.7rem;
  padding: 0 0.8rem;
  height: 1.6rem;
  display: block;
  border: 0;
  border-radius: 0.1rem;
  font-weight: 400;
  transition: box-shadow 0.2s, opacity 0.2s;
  font-size: 0.8rem;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  opacity: 0.5;
  color: ${colors.copy};
  width: 100%;

  &:focus {
    outline: transparent;
    opacity: 1;
  }

  @media (min-width: 576px) {
    padding: 0 1.3rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 0.2rem;
  }
`;
