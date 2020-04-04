import { css } from 'styled-components';

const buttonStyles = css`
  display: inline;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.45rem 0.7rem 0.4rem;
  margin: 0;
  font-family: inherit;
  font-size: 0.65rem;
  line-height: 1.5;
  border-radius: 0.1rem;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  @media (min-width: 576px) {
    font-size: 0.75rem;
    padding: 0.55rem 2rem 0.5rem;
  }
`;

export default buttonStyles;
