import styled from 'styled-components';
import { colors } from 'global-styles';

const Article = styled.article`
  background-color: ${colors.cloud};
  text-align: center;
  padding: 4rem 3rem;

  @media (min-width: 576px) {
    padding: 20rem 2rem 16rem;
  }
`;

export default Article;
