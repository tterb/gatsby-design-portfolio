import { darken } from 'polished'

const brand = {
  primary: '#15bbc5',
  secondary: '#e04445',
}

const colors = {
  black: '#000',
  grey: '#687880',
  light_grey: '#E4E6E9',
  white: '#FFF',
  bg_color: '#F8FAFC',
  body_color: 'rgba(0,0,0,0.75)',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
}

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '560px',
    m: '650px',
    l: '900px',
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
