import styled from 'styled-components';

import NormalImg from 'components/Img';

const Background = styled(NormalImg)`
  width: auto;
  height: 100%;
  margin: 0 auto;
  display: block;
  filter: blur(4px);
  position: absolute;
`;

export default Background;
