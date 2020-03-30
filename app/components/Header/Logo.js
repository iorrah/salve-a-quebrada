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
  font-size: 18px;
  color: #fff;

  &:active {
    color: #fff;
  }
`;
