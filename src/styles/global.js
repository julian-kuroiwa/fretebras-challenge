import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: red;
  }

  body,
  input,
  button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
