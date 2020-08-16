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
    --title-color: #262A4D;
    --base-txt-color: #4A69A7;
    --green-color: #45C328;
    --color-text-in-primary: #C2D3FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: var(--background-color);
  }

  #root {
    display: flex;
    /* align-items: center; */
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