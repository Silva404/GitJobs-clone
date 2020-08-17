import styled from 'styled-components';

import { MdKeyboardBackspace } from 'react-icons/md'

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 2em auto;
  a.allPositions {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--base-txt-color)
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
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1)
`;

export const Title = styled.div ` 
  p {
    font-size: 1.4rem;
    color: var(--input-txt-color);
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 2.2rem;
    color: var(--title-color)
  }
`;

export const AboutContainer = styled.div ` 
  width: 100%;
  display: grid;
  grid-template-columns: 620px 1fr;
  gap: 2em;
  
`;

export const AsideLeft = styled.div ` 
  width: 100%;
  font-size: 1.4rem;
  color: var(--input-txt2-color)
  
`;
export const AsideRight = styled.div ` 
  align-self: start;
  
`;
export const Company = styled.div `
 a {
   img {
     width: 100%;
   }
 } 
  
`;
export const HowToApply = styled.div ` 
  
`;