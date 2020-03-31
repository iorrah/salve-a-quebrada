import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

export default styled(PrimaryButton)`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  display: block;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 576px) {
    font-size: 0.8rem;
  }
`;
