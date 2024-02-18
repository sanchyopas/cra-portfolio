import { createGlobalStyle } from "styled-components";
import { myTheme } from "./ThemeStyle";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${myTheme.color.bodyColor};
    color: ${myTheme.color.defaultFont};
    font-family: "Fira Code", monospace;
  }

  ul,ol{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  button{
    background-color: transparent;
    cursor: pointer;
    transition: all .5s ease 0s;
    padding: 0;
    margin: 0;
  }

  p{
  }
`;

export default GlobalStyle;
