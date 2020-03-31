import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled.a`
  color: ${colors.gray};
  margin: 0 1rem 0 0;
  font-size: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${colors.gray};
  }

  &:last-child {
    margin: 0;
  }

  @media (min-width: 576px) {
    font-size: 0.8rem;
  }
`;
