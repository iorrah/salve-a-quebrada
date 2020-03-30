import { createGlobalStyle } from 'styled-components';

const safeFonts = 'Arial, Helvetica, sans-serif';
const font = `Lato, ${safeFonts}`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: normal;
    font-size: 1rem;
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

  .container {
    max-width: none;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 576px) {
      padding: 0 15px;
    }

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px)
      max-width: 1140px;
    }
  }
`;

export default GlobalStyle;
