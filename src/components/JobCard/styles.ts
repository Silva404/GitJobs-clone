import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5em;
  margin-bottom: 1em;
  width: 100%;
  position: relative;

  &::after {
      position: absolute;
      content: '';
      bottom: -5px;
      height: 1px;
      left: 0;
      width: 100%;
      background: rgba(0,0,0,.1);
  }

  a {
    color: var(--titleColor);
    font-weight: 500;
  }

  @media (min-width: 700px) {
  }
`;

export const TopSide = styled.div `
  a { 
    color: var(--base-txt-color)
  }
`;

export const BottomSide = styled.div `
  p:first-child {
    color: var(--input-txt2-color)
  }
  p:nth-child(2) {
    opacity: 0.8;
    color: var(--input-txt-color)
  }

`;

export const Detail = styled.div `
  display: flex;
  a {
    font-weight: 300;
    color: var(--input-txt-color);
  }
  p {
    margin-left: 0.5em;
    color: var(--green-color);
    font-weight: 500;
  }
`
