import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --dark-snow: #E5E5E5;
    --dark-smoke: #555555;
    --smote: #8E8E8E;
    --snow: #F5F5F5;
    --white: #FFFFFF;
    --dark-blue: #167ABC;
    --dark-red: #e62429;
    --black: #000000;
    --dark: #202020;
  }

  ::placeholder {
    font-style: italic;
    color: var(--smote, #8E8E8E);
    font-size: 14px;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    color: var(--dark-smoke, #000);
  }

  input {
    font-family: 'PT Sans';
  }

  p {
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
  }
`;
