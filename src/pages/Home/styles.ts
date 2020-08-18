import styled from 'styled-components';

export const JobsContainer = styled.div `
  width: 930px;
  margin: 3em auto;

  padding: 2em;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;
  box-shadow: 0 10px 20px -5px rgba(0,0,0,.1);
`

export const Title = styled.div `
  h2 {
    font-size: 2rem;
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