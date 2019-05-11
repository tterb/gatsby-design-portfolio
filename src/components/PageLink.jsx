import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../config/theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PageLink = ({ direction, duration, to, className, children }) => (
  <>
    <AniLink cover to={to}
      bg={theme.colors.light_grey} 
      direction={direction}
      duration={duration}
      className={className} >
      { children }
    </AniLink>
  </>
)

PageLink.defaultProps = {
  direction: 'down',
  duration: 1,
}
PageLink.propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default PageLink