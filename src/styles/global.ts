import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowned;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: #6558f5 #6558f5;
  }

  body::-webkit-scrollbar-track {
    background: #f0f2f5;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #6558f5;
    border: 3px solid #6558f5;
  }

  #ReactModal__Content {
    h2 {
      margin-bottom: 30px;
    }
  }
`
