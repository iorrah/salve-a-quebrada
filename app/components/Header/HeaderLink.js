import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled(Link)`
  display: inline-block;
  margin: 0 1rem 0 0;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: 500;
  font-size: 0.65rem;
  color: ${colors.white};

  &:active {
    color: ${colors.white};
  }

  @media (min-width: 576px) {
    font-size: 0.8rem;
    margin: 0 2rem 0 0;
  }
`;
