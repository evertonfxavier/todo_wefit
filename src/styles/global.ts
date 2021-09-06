import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font: 16px "Roboto", Arial, sans-serif;
  }
  input, textarea {
    font-family: "Roboto";
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
