import styled from 'styled-components';

import { MdKeyboardBackspace } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'

export const Container = styled.div`
  width: 90%:
  max-width: 940px;
  margin: 3em auto;
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
  h1 {
    font-size: 2rem;
    color: var(--title-color)
  }
`;

export const AboutContainer = styled.div ` 
  width: 100%;

  @media (min-width: 700px) {

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;  
  }
`;

export const AsideLeft = styled.div ` 
  max-width: 100%;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--input-txt2-color);  
  p {
    width: 100%;
  }
`;
export const AsideRight = styled.div ` 
  max-width: 100%;
  align-self: start;
  a {
    color: var(--title-color)
  }
  
`;
export const Subscribe = styled.div `
  width: 100%; 
  font-size: 1.4rem;
  padding: 1em;
  margin: 1em 0;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 5px 10px -5px rgba(0,0,0,.1);
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a { 
    color: var(--subtitle-color);
  }   
`;

export const HowToApply = styled.div ` 
  width: 100%;
  

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
    width: 100%;
  }
`;

export const EmailUpdates = styled.div ` 
  width: 100%;
  padding: 1em;
  margin: 1em 0;
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

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--input-txt2-color);
  }

  button {
    width: 100%;
    font-size: 1.2rem;
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid var(--button-bg-color);
    background: var(--button-bg-color);
    color: var(--button-txt-color);
    margin-top: 2em;
  }
`

export const TwitterLogo = styled(FaTwitter) `
  height: 25px;
  margin-right: 0.5em;
  color: var(--subtitle-color)
`