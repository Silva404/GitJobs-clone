import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa'

export const FooterContent = styled.div `
  margin-top: auto;
  background: #fff;
  width: 100vw;
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
  width: 940px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 auto;

  height: 60px;
`;

export const FooterLinks = styled.div `

`;

export const GitHubLogo = styled(FaGithub) `
  height: 25px;
  width: 25px;
  opacity: 0.25;
`;

export const Copyright = styled.div `
   font-size: 1.2rem;
   font-weight: 500;
   opacity: 0.5;
`;

