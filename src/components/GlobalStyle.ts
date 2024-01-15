import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Allura';
    src: url('https://fonts.gstatic.com/s/allura/v21/9oRPNYsQpS4zjuA_iwgWHNn7GQ.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Allura', sans-serif;
  }
`;

export default GlobalStyle;