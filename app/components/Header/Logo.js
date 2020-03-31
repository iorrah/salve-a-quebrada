import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'global-styles';

export default styled(Link)`
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  outline: 0;
  font-weight: 900;
  font-size: 0.7rem;
  color: ${colors.white};

  &:active {
    color: ${colors.white};
  }

  @media (min-width: 576px) {
    font-size: 1.1rem;
  }
`;
