import styled from 'styled-components';
import { GoLogoGithub } from 'react-icons/go'

export const Container = styled.div`
  background-color: var(--color-primary);
  height: 220px;
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
    font-size: 2.8rem;
    font-weight: 300;
    margin: 0.15em 0 0 0.1em;
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
  margin-top: 4rem; 

  @media (min-width: 700px) {
    form {
      display: grid;
      grid-template-columns:  1fr 1fr 0.5fr 0.5fr ;
      gap: 1.5em;   
    }
  }

  button {
    margin-top: 2.2em;
    border-radius: 0.5em;
    font-size: 1.4rem;    
    color: var(--button-bg-color);
    background: var(--button-txt-color);
    border: 1px solid var(--button-bg-color);
    outline: none;

    &:hover {
      color: var(--button-txt-color);
      background: var(--button-bg-color);
      border: 1px solid var(--button-txt-color);
    }
  }
`;

export const InputBlock = styled.div `
  position: relative;
  margin-bottom: 1em;

  &:focus-within::after {
  width: calc(100% - 3.2rem);
  height: 2px;
  border-radius: 50%;
  content: '';
  background: var(--color-primary);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
}

  label {
  color: var(--label-color);
  font-size: 1.4rem;
}

  input {
    outline: none;
    color: var(--input-txt-color);
    margin-top: 0.5em;
    padding: 1em 2em;
    width: 100%;
    font-weight: 300;
    font-size: 1.4rem;
    border: 0;
    border-radius: 0.8rem;
    box-shadow: 0 4px 25px -10px rgba(0, 0, 0, .2)
  }
  @media (min-width: 700px) {
    margin-bottom: 0;
  }  
`