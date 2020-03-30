import { createGlobalStyle } from 'styled-components';

const safeFonts = 'Arial, Helvetica, sans-serif';
const font = `Lato, ${safeFonts}`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: normal;
    font-size: 14px;
  }

  body {
    font-family: ${safeFonts};
  }

  body.fontLoaded {
    font-family: ${font};
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
