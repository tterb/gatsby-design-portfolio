import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import theme from '../../config/theme'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faShapes, faHistory, faTachometerAlt, faBomb, faBullseye } from '@fortawesome/free-solid-svg-icons'
import { Bullseye } from 'styled-icons/boxicons-regular/Bullseye'
import { History } from 'styled-icons/boxicons-regular/History'
import { Adjust } from 'styled-icons/boxicons-regular/Adjust'
import { Customize } from 'styled-icons/boxicons-regular/Customize'
import { CodeAlt } from 'styled-icons/boxicons-regular/CodeAlt'

const Wrapper = styled.div`
  ${tw`px-2`}
`

const Line = styled.span`
  ${tw`block relative w-1/4 my-6`}
  background: ${theme.brand.primary};
  height: 6px;
  margin-top: 5rem;
`

const SectionTitle = styled.h2`
  ${tw`leading-none mt-4 ml-0 mb-4`}
  color: rgba(0,0,0,0.85);
  margin-left: 0 !important;
  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }
`

const SubTitle = styled.p`
  ${tw`font-sans font-normal align-left xs:w-9/10 md:w-4/5 mt-3 ml-1 mb-5`}
  color: color: rgba(0,0,0,0.85);
`

const TextSection = styled.div`
  ${tw`inline-block relative text-grey align-top align-left w-2/5 my-3 mx-2 mb-5`}
  @media screen and (max-width: 500px) {
    width: 45% !important;
  }
  h4 {
    ${tw`font-bold mx-0 mt-4 mb-2`}
    color: ${theme.colors.body_color};
    /* font-size: 1.5rem; */
    /* font-weight: 700; */
    /* margin: 1rem 0 0.5rem; */
  }
  p {
    ${tw`text-base m-2 mt-3 xs:ml-0`}
    color: rgba(0,0,0,0.6);
    /* font-size: 1rem !important;
    margin: 0.75rem 0.05rem 0.5rem; */
  }
  svg {
    ${tw`text-2xl xs:ml-0 md:ml-1`}
    color: ${theme.brand.primary};
    fill: ${theme.brand.primary};
    min-width: 36px;
    min-height: 36px;
    /* font-size: 1.5rem; */
  }
`

const Principles = () => (
  <>
  <Wrapper>
    <Line />
    <SectionTitle>My core principles<span className='accent-blue'>.</span></SectionTitle>
    <SubTitle>Designers are constantly faced with decisions, thus I believe that it's imperative to establish a set of principles in your work.</SubTitle>
    <TextSection>
      <FontAwesomeIcon icon={faUsers} />
      <h4>User-centric</h4>
      <p>Design decisions should be made from the perspective of the user in order to create a product that is not only accessible, but that users <i>enjoy</i> using.</p>
    </TextSection>
    <TextSection>
      <Bullseye size="36" />
      <h4>Objective-focused</h4>
      <p>A design should be approached with a singular and deliberate objective. Additional features should only be used to aid in accomplishing this goal.</p>
    </TextSection>
    <TextSection>
      <CodeAlt size="36" />
      <h4>Efficient</h4>
      <p>Designs should not only <i>look</i> good, but should also be created with the foresight and knowledge that it can be engineered well.</p>
    </TextSection>
    <TextSection>
      <FontAwesomeIcon icon={faShapes} />
      <h4>Modularity</h4>
      <p>Software should be modular enough to adapt to changes, and maleable enough to accomodate the needs of all users.</p>
    </TextSection>
  </Wrapper>
  </>
)

export default Principles

/* <TextSection>
  <FontAwesomeIcon icon={faTachometerAlt} />
  <h4>Performance</h4>
  <p>Technology is responsible for revolutionizing the speed and efficiency of our world, there's no reason for it to stop now.</p>
</TextSection> */

// <TextSection>
//   <FontAwesomeIcon icon={faBomb}/>
//   <h4>Fail Fast</h4>
// </TextSection>
