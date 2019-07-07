import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const Wrapper = styled.footer`
  ${tw`text-grey text-sm text-center shadow-up m-0 p-8 py-6 pb-8 z-9999`};
  background: #fff;
  a {
    color: ${props => props.theme.brand.primary};
  }
`

const Footer = () => (
  <Wrapper data-testid="footer">
    Copyright &copy; <a href="https://tterb_gatsby.netlify.com/" target="_blank">Brett Stevenson</a> 2019. All right reserved
  </Wrapper>
)

export default Footer
