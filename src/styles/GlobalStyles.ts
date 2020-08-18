import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    font-size: 60%;
  
    --color-primary: #5776E5;
    --background-color: #EFEFF9;
    --search-button: #8EB5F1;
    --label-color: #DBE5FF;
    --border-color: #e2e5ee;
    --input-txt-color: #7a798d;
    --input-txt2-color: #646374;
    --title-color: #262A4D;
    --subtitle-color: #282a3b;
    --base-txt-color: #4A69A7;
    --footer-txt-color: #5b6b8b;
    --green-color: #45C328;
    --color-text-in-primary: #C2D3FF;

    --faq-title-color: #1c1f38;
    --faq-txt-color: #4d4d50;
    --button-txt-color: #f3f6fd;
    --button-bg-color: #4e86bb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    display: flex;
    flex-direction: column; 
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--background-color);
  }

  html {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  input {
    outline: 0;
  }

  body,
  input,
  button {
    font: 500 1.6rem Poppins;
  }

  .container {
    width: 90vw;  
    max-width: 930px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
}
`