import styled from 'styled-components';

export default styled.div`
  background: white;
  border-radius: 0.1rem;
  height: 25.59px;
  overflow: visible;
  margin: 0 auto;
  width: 100%;
  max-width: 70%;

  @media (min-width: 576px) {
    border-radius: 0.2rem;
    height: 48px;
  }

  @media (min-width: 768px) {
    max-width: 75%;
  }

  @media (min-width: 992px) {
    max-width: 30rem;
  }
`;
