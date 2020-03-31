import styled from 'styled-components';

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;

  @media (min-width: 576px) {
    margin: 0 0 2rem;
  }
`;

export default Header;
