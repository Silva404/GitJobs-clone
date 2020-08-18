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
  }
`;

export const Title = styled.div `
  color: var(--title-color);
  h1 {
      font-size: 2.2rem;  
      margin-bottom: 0.5em;  
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

