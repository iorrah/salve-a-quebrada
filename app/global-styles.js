import { createGlobalStyle } from 'styled-components';

const safeFonts = 'Arial, Helvetica, sans-serif';
const font = `Lato, ${safeFonts}`;

export const colors = {
  primary: '#0579ff',
  primaryDarken: '#0552ff',
  copy: '#333',
  white: 'white',
  gray: '#8e8e8e',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: normal;
    font-size: 1rem;
    color: ${colors.copy};
    cursor: auto;
  }

  body {
    font-family: ${safeFonts};
  }

  body.fontLoaded {
    font-family: ${font};
  }

  #app {
    background-color: ${colors.white};
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
