import styled from 'styled-components';
import { colors } from 'global-styles';

const ImgWrapper = styled.div`
  align-items: center;
  background: ${colors.copy};
  display: flex;
  height: auto;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 330px;
  }

  @media (min-width: 992px) {
    height: 289px;
  }

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

export default ImgWrapper;
