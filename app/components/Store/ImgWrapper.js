import styled from 'styled-components';
import { colors } from 'global-styles';

const ImgWrapper = styled.div`
  align-items: center;
  background: ${colors.copy};
  display: flex;
  min-height: auto;

  @media (min-width: 768px) {
    min-height: 330px;
  }

  @media (min-width: 992px) {
    min-height: 289px;
  }

  @media (min-width: 1200px) {
    min-height: 350px;
  }
`;

export default ImgWrapper;
