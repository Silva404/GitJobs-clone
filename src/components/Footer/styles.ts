import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa'

export const FooterContent = styled.div `
  margin-top: auto;
  background: #fff;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, .15);
  }

  a {
    font-size: 1.3rem;
    color: var(--footer-txt-color);
    margin-right: 1.3em;
  }
`;

export const FooterContainer = styled.div `
  display: flex;
  flex-direction: column; 
  margin: 0 auto;

  a {
    margin: 2em auto;
  }

  
  @media (min-width: 800px) {
    width: 90%;
    max-width: 940px;
    display: flex;
    flex-direction: initial;
    align-items: center;
    justify-content: space-between;
    
    height: 60px;

    a {
      margin: 0;
    }
  }
`;

export const FooterLinks = styled.div `
  margin: 2em auto 0;

  a { 
    margin-right: 1.5em;
  }

  @media (min-width: 800px) {
    margin: 0;
  }
`;

export const GitHubLogo = styled(FaGithub) `
  height: 25px;
  width: 25px;
  opacity: 0.25;

  margin: 0 auto;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

export const Copyright = styled.div `
   font-size: 1.2rem;
   font-weight: 500;
   opacity: 0.5;

   margin: 0 auto 2em;

  @media (min-width: 800px) {
    margin: 0;
  }
`;

