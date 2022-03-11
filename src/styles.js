import styled, { css, createGlobalStyle } from "styled-components"

/* BreakPoints */
export const smbp = 600
export const mdbp = 1200

const ForFocusCSS = css`
  outline: 2px solid var(--pink);
  outline-offset: 5px;
`

export const FocusCSS = css`
  &:focus {
    outline: none;
  }

  &[data-focus-visible-added] {
    ${ForFocusCSS}
  }

  &:focus-visible {
    ${ForFocusCSS}
  }
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #ff1493;

    --color-text: #fff;
    --color-background-hsl: 275deg 30% 5%;
    --color-background: hsl(var(--color-background-hsl));

    --box-shadow-1: rgba(255, 255, 255, .08);
    --box-shadow-2: rgba(255, 255, 255, .15);
    --box-shadow-3: rgba(255, 255, 255, .2);

    --splat-wrapper-background: rgba(0, 0, 0, .6);


    @media (prefers-color-scheme: light) {
      --color-text: #000;
      --color-background: #fff;

      --box-shadow-1: rgba(0, 0, 0, .01);
      --box-shadow-2: rgba(0, 0, 0, .2);
      --box-shadow-3: rgba(0, 0, 0, .4);

      --splat-wrapper-background: rgba(255, 255, 255, .8);

    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }

  *::selection {

  }

  html {
    height: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    background-color: var(--color-background);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1 {
    font-family: Audiowide, sans-serif;
  }

  h2 {
    font-family: Audiowide, sans-serif;
  }

  a {
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      color: var(--pink);
    }
  }

  a, button, input {
    ${FocusCSS}
  }
`

export const Main = styled.main`
  padding: 20px 20px;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({$alignItems = "flex-start"}) => $alignItems};
  justify-content: ${({$justifyContent = "flex-start"}) => $justifyContent};
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$alignItems = "flex-start"}) => $alignItems};
  justify-content: ${({$justifyContent = "flex-start"}) => $justifyContent};
`

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 40px;
  margin: 60px auto 0 auto;
  padding: 0 10px;
  max-width: 1200px;

  @media (max-width: ${mdbp}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${smbp}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 20px;
  }
`

export const GenreCardContainer = styled(FlexRow)`
  flex-wrap: wrap;
`

export const SplatContainer = styled.div`
  color: white;
  padding: 20px;
  border-radius: 10px;
  min-height: 50vh;
`

export const SplatWrapper = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-text);
  background: var(--splat-wrapper-background);
  padding: 10px;
  border-radius: 18px;
  align-items: stretch;

  @media (max-width: ${smbp}px) {
    flex-direction: column;
  }
`

export const SplatPoster = styled.img`
  max-width: 30%;
  border-radius: 5px;
  margin: 0 10px 0 0;

  @media (max-width: ${smbp}px) {
    max-width: 100%;
  }
`

export const SplatInformation = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > * {
    margin-bottom: 10px;
  }
`
