import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 3.5rem;
  width: 100%;
  padding: 0 15px;

  @media (min-width: 768px) {
    top: 7rem;
  }

  @media (min-width: 992px) {
    top: 11rem;
  }
`;
