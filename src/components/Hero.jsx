import styled from 'styled-components'
import tw from 'tailwind.macro'

const Hero = styled.section`
  ${tw`relative xs:mt-0 md:-mt-16 overflow-hidden`}
  height: ${props => (props.single ? '28vw' : '40vw')};
  margin-bottom: ${props => (props.single ? '0' : '1rem')};
  @media (max-width: ${props => props.theme.breakpoints.m}), (max-device-width: ${props => props.theme.breakpoints.m}) {
    ${props => (props.single ? '40vw' : '60vw')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}), (max-device-width: ${props => props.theme.breakpoints.s}) {
    ${props => (props.single ? '300px' : '400px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}),
    (max-device-width: ${props => props.theme.breakpoints.xs}) {
    height: 400px;
    margin-top: -7rem;
  }
  @media screen and (max-width: 420px) {
    height: 40vw;
  }
`

export default Hero
