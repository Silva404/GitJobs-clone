import styled from 'styled-components';
import { GoLogoGithub } from 'react-icons/go'

export const Container = styled.div`
  background-color: var(--color-primary);
  height: 450px;
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
    margin-right: 1em;
  }  
`

export const GitJobsLogo = styled(GoLogoGithub) `
  height: 80px;
  width: 80px;
  fill: #fff;
`;

export const SearchForm = styled.div `

`;