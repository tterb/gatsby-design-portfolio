import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: #fff;
  color: ${props => props.theme.colors.grey};
  text-align: center;
  box-shadow: rgba(0,0,0,0.075) 0px -5px 15px 0px;
  margin: 0rem 0 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 9999;
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`

const Footer = () => (
  <Wrapper data-testid="footer">
    Copyright &copy; <a href="https://tterb_gatsby.netlify.com/" target="_blank">Brett Stevenson</a> 2019. All right reserved.
  </Wrapper>
)

export default Footer
