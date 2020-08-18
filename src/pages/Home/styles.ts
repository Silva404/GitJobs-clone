import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md'

export const JobsContainer = styled.div `
  width: 100vw;
  margin: 3em 0 0;
  padding: 2em;

  border-radius: 0.5em;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1);
  border: 0;

  @media (min-width: 700px) {    
    border: 1px solid var(--border-color);
    width: 90%;
    max-width: 930px;
    margin: 3em auto;
  }
`

export const Title = styled.div `
  h2 {
    font-size: 2.2rem;
    color: var(--title-color);
    position: relative;
    margin-bottom: 1.5em;

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
`

export const MorePositions = styled.div ` 
  margin: 1em 0;

  a strong {
    font-size: 1.4rem;
    color: var(--base-txt-color);
    font-weight: 500;

    display: flex;
    align-items: center;
  }
`;

export const Footer = styled.div `
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1em;
    color: var(--title-color);
  }
`;

export const ArrowRight = styled(MdArrowForward)`
  width: 25px;
  height: 25px;
  margin-left: 0.5em;
`;

export const HotLinks = styled.div `  
  max-width: 60%;

  a {
    max-width: 80%;
    margin: 0 0.5em;
    font-size: 1.4rem;
    color: var(--base-txt-color);
    &:first-child {
      margin: 0 1em 0 0;
    }

    @media (min-width: 700px) {
      margin: 0 1em;
    }
  }
`;

export const Main = styled.div `
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;
  }
`

export const RightSide = styled.div `
`;

export const LeftSide = styled.div `
  width: 500px;
`;

export const FeaturedCompany = styled.div `
  p {
    font-size: 1.4rem;
  }

  width: 100%;
  padding: 2em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1);
`;

