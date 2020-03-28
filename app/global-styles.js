import { createGlobalStyle } from 'styled-components';

const defaultFont = 'Arial, Helvetica, sans-serif';
const font = `Lato, ${defaultFont}`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: ${defaultFont};
  }

  body.fontLoaded {
    font-family: ${font};
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
