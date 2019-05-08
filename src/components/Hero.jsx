import styled from 'styled-components'

const Hero = styled.section`
  position: relative;
  height: ${props => (props.single ? '28vw' : '40vw')};
  margin-top: -4rem;
  margin-bottom: ${props => (props.single ? '0' : '1rem')};
  overflow: hidden;
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
`

export default Hero
