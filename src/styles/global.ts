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

// :root {
//   --blue: #273FAD;
//   --green: #3FAD27;
//   --red: 	#ad273f;
//   --background: #EBEBEB;
//   --shapes: #FFFFFF;
//   --text-title: #3D3D4D;
//   --text: #1C1C29;
//   --text-light: #A09CB1;
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font: 16px "Roboto", Arial, sans-serif;
//   color: #121214;
// }
