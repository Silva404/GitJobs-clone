import styled from 'styled-components';

import { MdKeyboardBackspace } from 'react-icons/md'

export const Container = styled.div`
  width: 940px;
  margin: 2em auto;
  a.allPositions {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--base-txt-color);
    transition: 200ms;
  }
  a.allPositions:hover {
    filter: brightness(0.6)
  }
`;

export const ArrowLeft = styled(MdKeyboardBackspace) `
  height: 15px;
  margin-right: 0.5em;
`

export const PositionContainer = styled.div ` 
  width: 100%;
  margin: 1em 0; 

  padding: 2em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1);
`;

export const Title = styled.div ` 
  margin-bottom: 2.5em;
  position: relative;

  &::after{
    position: absolute;
    content: '';
    bottom: -18px;
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,.1)
  }
  p {
    font-weight: 300;
    font-size: 1.3rem;
    color: var(--input-txt-color);
    margin-bottom: 0.25em;
  }
  h1 {
    font-size: 2rem;
    color: var(--title-color)
  }
`;

export const AboutContainer = styled.div ` 
  max-width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2em;
  
`;

export const AsideLeft = styled.div ` 
  width: 100%;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--input-txt2-color);  
  p {
    width: 100%;
  }
`;
export const AsideRight = styled.div ` 
  width: 100%;
  align-self: start;
  a {
    color: var(--title-color)
  }
  
`;
export const Company = styled.div `
  width: 100%; 

  a { 
    color: var(--subtitle-color);
    position: relative;
    margin-bottom: 1em;
    display: flex;

    &:first-child::after {
      position: absolute;
      content: '';
      bottom: -6px;
      height: 1px;
      left: 0;
      width: 100%;
      background: rgba(0,0,0,.1);
    }
  }
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,.1);
  
  a {
   img {
     max-width: 100%;
   }
 } 
  
`;
export const HowToApply = styled.div ` 
  max-width: 100%;
  

  padding: 1em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,.1);
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--subtitle-color);
    position: relative;
    margin-bottom: 1em;

    &::after {
      position: absolute;
      content: '';
      bottom: -6px;
      height: 1px;
      left: 0;
      width: 100%;
      background: rgba(0,0,0,.1);
    }
  }
  img {
    max-width: 100%;
  }
`;

export const Apply = styled.div `
  margin-top: 1.5em;
  max-width: 150px;
  font-size: 1.2rem;
  font-weight: 300;
`