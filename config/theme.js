import { darken } from 'polished'

const brand = {
  primary: '#30c3b6',
  secondary: '#e04445',
}

const colors = {
  black: '#000',
  grey: '#687880',
  light_grey: '#E4E6E9',
  white: '#fff',
  bg_color: '#f3f3f3',
  body_color: 'rgba(0,0,0,0.75)',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
}

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
}

export default theme
