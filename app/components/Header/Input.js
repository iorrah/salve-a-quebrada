import styled from 'styled-components';

export default styled.input`
  height: 0.7rem;
  padding: 0 0.8rem;
  height: 1.6rem;
  width: 70%;
  margin: 0 auto;
  display: block;
  border: 0;
  border-radius: 0.1rem;
  font-weight: 300;
  transition: box-shadow 0.3s;
  font-size: 0.8rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: transparent;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 576px) {
    padding: 0 1.3rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;
