import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, useTrail, config } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  ${tw`flex flex-col w-full tracking-tight justify-end self-start shadow-down -mt-14 px-9 py-16 z-999`}
  height: 55vh;
  @media (max-width: 500px) {
    height: 50vh;
  }
  span {
    color: rgba(70,100,150,0.5);
  }
`

const PageTitle = styled(animated.h1)`
  ${tw`text-4xl md:text-5xl font-normal tracking-tighter leading-tighter mt-4 mb-2`}
  @media (max-width: 650px) {
    font-size: 2.75rem;
  }
`

const SubTitle = styled(animated.h1)`
  ${tw`text-3xl md:text-4xl font-light tracking-tight leading-tighter my-1`}
`

const Hero = () => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const infoProps = useSpring({ 
    config: config.slow,
    delay: 500,
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  return (
    <Wrapper>
      <PageTitle style={titleProps}>
        Brett Stevenson<span>.</span>
      </PageTitle>
      <SubTitle style={infoProps}>Software Developer <span>+</span> Designer</SubTitle>
    </Wrapper>
  )
}

export default Hero
