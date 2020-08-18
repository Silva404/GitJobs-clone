import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 930px;
  padding: 1em;
  margin: 3em auto 0;
`;

export const Title = styled.div `
  color: var(--title-color);
  text-align: center;
    h1 {
      font-size: 2.2rem;  
      margin-bottom: 0.5em;    
    } 
    h3 {
      font-size: 1.4rem;
    }
`;

export const Cards = styled.div `
  margin: 2em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 4em;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5em;
  }
`;

export const Card  = styled.div `
    align-self: center;
    text-align: center;
    color: var(--base-txt-color);
    h4 {
      font-size: 1.6rem;
      align-self: end;     
    }
    p {
      font-size: 1.3rem;
      font-weight: 300;
      a {
        margin-left: 0.5em;
        color: var(--title-color)
      }
    }
`;

export const Box = styled.div `

`;

export const Price = styled.div `
  h1 {
    font-size: 4.6rem;
    span {
       font-size:3.2rem; 
      }
  }
`;

export const CreditCards = styled.div `

`;

export const Footer = styled.div `
  color: var(--title-color);
  text-align: center;
    h3 {
      margin: 4em 0;    
      font-size: 1.4rem;
      a {
        color: var(--base-txt-color);
        margin: 0 0.5em;
      }
    }
`;
