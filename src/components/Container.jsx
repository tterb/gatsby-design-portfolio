import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.container[props.type]};
  padding: 0 ${props => props.theme.spacer.horizontal};
  margin: 0 auto;
  &.page-content {
    margin-bottom: 10rem;
  }
  &.project-content {
    margin-bottom: 7rem;
  }
  ${props =>
    props.type === 'text' &&
    css`
      p {
        font-size: 1.2rem;
        letter-spacing: -0.003em;
        line-height: 1.58;
        margin-top: 0;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        @media (max-width: ${props.theme.breakpoints.l}), (max-device-width: ${props.theme.breakpoints.l}) {
          font-size: 1.1rem;
        }
        @media (max-width: ${props.theme.breakpoints.m}), (max-device-width: ${props.theme.breakpoints.m}) {
          font-size: 1rem;
        }
      }
      .gatsby-image-wrapper {
        width: 90%;
        box-shadow: rgba(0,0,0,0.25) 0px 5px 10px 0px, rgba(0,0,0,0.08) 0px 5px 15px 0px;
        margin: 2.5rem auto;
      }
    `};
  @media (max-width: ${props => props.theme.breakpoints.s}), (max-device-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
`

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['base', 'text']),
  className: PropTypes.string,
}

Container.defaultProps = {
  type: 'base',
  className: null,
}
