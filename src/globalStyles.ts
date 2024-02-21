import { css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { visuallyHidden } from './utils/a11y'

export const GlobalStyles = css`
  ${emotionNormalize}

  * {
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
    margin: 0;
    color: #757575;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
    color: #757575;
    background-color: #aaaaaa;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    background: transparent;
    border: 0;
    padding: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  h1 {
    margin: 0;
  }

  .visuallyHidden {
    ${visuallyHidden()}
  }
`
