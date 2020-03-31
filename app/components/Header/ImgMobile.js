import styled from 'styled-components';

import Img from './Img';

// 0 - 576

export default styled(Img)`
  @media (min-width: 577px) {
    display: none !important;
  }
`;
