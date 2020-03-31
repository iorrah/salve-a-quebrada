import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  margin: 0 2rem;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: 500;
  font-size: 0.7rem;
  color: white;

  &:active {
    color: white;
  }

  @media (min-width: 576px) {
    font-size: 0.8rem;
  }
`;
