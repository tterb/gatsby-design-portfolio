import styled from 'styled-components'
import tw from 'tailwind.macro'

const ProjectHero = styled.section`
  ${tw`relative overflow-hidden`}
  height: ${props => (props.single ? '28vw' : '50vh')};
  margin-top: ${props => (props.single ? '0' : '-4rem')};
  margin-bottom: ${props => (props.single ? '0' : '1rem')};
  @media (max-width: 620px), (max-device-width: 620px) {
    margin-top: ${props => (props.single ? '0' : '-5.5rem')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}),
    (max-device-width: ${props => props.theme.breakpoints.s}) {
    height: 50vh;
    margin-top: -7rem;
  }
  @media screen and (max-width: 500px) {
    height: 50vh;
  }
`

export default ProjectHero
