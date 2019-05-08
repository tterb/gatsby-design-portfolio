import { css } from 'styled-components'
import theme from '../../config/theme'

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 18px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    h1 {
      font-size: 2.441rem;
    }
    h2 {
      font-size: 1.953rem;
    }
    h3 {
      font-size: 1.563rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    h1, h2, h3 {
      color: rgba(0,0,0,0.9);
    }
    @media (max-width: ${theme.breakpoints.l}), (max-device-width: ${theme.breakpoints.l}) {
      font-size: 18px !important;
      h1 {
        /* font-size: 2.074rem; */
        font-size: 5.074rem;
        margin-top: 4rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1.728rem;
      }
      h3 {
        font-size: 1.44rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: ${theme.breakpoints.m}), (max-device-width: ${theme.breakpoints.m}) {
      font-size: 16px !important;
    }
    @media (max-width: ${theme.breakpoints.s}), (max-device-width: ${theme.breakpoints.s}) {
      h1 {
        font-size: 1.602rem;
      }
      h2 {
        font-size: 1.424rem;
      }
      h3 {
        font-size: 1.266rem;
      }
      h4 {
        font-size: 1.125rem;
      }
    }
  }
  body {
    background-color: ${theme.colors.bg_color};
    color: ${theme.colors.body_color};
  }
  ::selection {
    background-color: ${theme.colors.link_color};
    color: ${theme.colors.white};
  }
  a {
    color: ${theme.colors.link_color};
    text-decoration: none;
    transition: all 300ms ease-in-out;
    &:hover,
    &:focus {
      color: ${theme.colors.link_color_hover};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  blockquote {
    font-style: italic;
    border-left: 5px solid ${theme.colors.link_color};
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 1rem !important;
    p {
      line-height: 1.3 !important;
    }
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    background-color: ${theme.colors.bg_color};
    border-collapse: collapse;
  }
  caption {
    color: ${theme.colors.body_color};
    text-align: center;
    caption-side: bottom;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    border: 0;
    margin: 0;
    padding: 0;
  }
  legend {
    display: block;
    font-size: 1.5rem;
    line-height: inherit;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    vertical-align: middle;
    overflow: hidden;
  }
  [hidden] {
    display: none !important;
  }
`

export default reset
