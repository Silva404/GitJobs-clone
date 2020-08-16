import styled from 'styled-components';
import { GoLogoGithub } from 'react-icons/go'

export const Container = styled.div`
  background-color: var(--color-primary);
  height: 250px;
  width: 100vw;
`;

export const Menu = styled.div`
  width: 90%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;  
`

export const HeaderContent = styled.div `
  width: 100%;
  padding-top: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinksContainer = styled.div `
  a {
    transition: 200ms;
  }
  a:hover {
    opacity: 0.8;
  }
  a:first-child {
    margin-right: 1.5em;
    position: relative;
  }  
  a:first-child::after {
    position: absolute;
    content: '';
    height: 80%;
    top: 3px;
    right: -13px;
    width: 1px;
    background: rgba(255,255,255,.2)
  }
`

export const GitLogo = styled.div `
  p {
    font-size: 2.6rem;
    font-weight: 300;
    margin: 0.2em 0 0 0.1em;
    color: #fff;
  }
  display: flex;
  align-items: center;
`

export const GitJobsLogo = styled(GoLogoGithub) `
  height: 80px;
  width: 80px;
  fill: #fff;
`;

export const SearchForm = styled.div `

`;