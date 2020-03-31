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
  padding: 0.375rem 0.8rem;
  margin: 0;
  font-family: inherit;
  font-size: 0.7rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  @media (min-width: 576px) {
    font-size: 0.9rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default buttonStyles;
