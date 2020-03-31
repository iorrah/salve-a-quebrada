import styled from 'styled-components';

import Img from './Img';

// 576 - 768

export default styled(Img)`
  @media (max-width: 576px) {
    display: none !important;
  }

  @media (min-width: 769px) {
    display: none !important;
  }
`;
