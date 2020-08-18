import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 930px;
  margin: 3em auto 0;

  padding: 2em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1);
`;
export const TextContainer = styled.div `
  width: 90%;
  max-width: 600px;
  p, a {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 1em;
  }
  p {
    color: var(--input-txt-color);
  }
  a {
    margin-top: 1em;
    color: var(--input-txt2-color);
  }
  h3 {
    font-size: 1.6rem;
    margin: 2em 0 1em;
    color: var(--input-txt2-color);
  }
  ul {
    margin-left: 1em;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--input-txt-color);
  }
  p strong {
    font-size: 1.4rem;
    margin-bottom: 1em;
    color: var(--input-txt-color);
  }
`;

export const Title = styled.div `
  color: var(--title-color);
  h1 {
      font-size: 2.2rem;  
      margin-bottom: 2.2em;  
      position: relative;

        &::after {
        position: absolute;
        content: '';
        bottom: -20px;
        height: 1px;
        left: 0;
        width: 100%;
        background: rgba(0,0,0,.1);
      }  
    } 
`;

