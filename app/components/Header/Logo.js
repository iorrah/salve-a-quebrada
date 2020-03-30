import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  outline: 0;
  font-weight: 900;
  font-size: 1.1rem;
  color: #fff;

  &:active {
    color: #fff;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;
