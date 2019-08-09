import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Image from 'gatsby-image'

const Item = styled(animated.div)`
  ${tw`relative`};
  &:before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`

const Content = styled.div`
  ${tw`absolute w-full h-full pin-t pin-l`};
  a {
    ${tw`absolute text-white no-underline w-full h-full pin-t pin-l xs:px-10 xs:py-11 sm:p-6 opacity-0 z-10`};
    transition: all 300ms ease-in-out;
    &:hover {
      ${tw`text-white no-underline opacity-100`};
    }
    @media screen and (max-width: 560px) {
      ${tw`px-10 py-11`}
    }
  }
  p {
    ${tw`leading-normal mx-0 xs:mt-5 xs:mb-6 md:mt-3 md:mb-5`};
    color: rgba(255,255,255,0.8);
    @media screen and (max-width: 560px) {
      font-size: 1.5rem;
    }
  }
`

const Title = styled.h2`
  ${tw`leading-tight mt-0 mb-2`};
  color: rgba(255,255,255,0.95);
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  @media screen and (max-width: 560px) {
    font-size: 3rem;
  }
`

const ImageWrapper = styled.div`
  > div {
    ${tw`absolute w-full h-full pin-t pin-l`};
    position: absolute !important;
    > div {
      position: static !important;
    }
  }
`

const Overlay = styled.div`
  ${tw`absolute w-full h-full pin-t pin-l`};
  background-color: ${props => props.theme.brand.primary};
  z-index: -2;
`

const TracedGlow = styled.img`
  ${tw`absolute w-full h-full pin`};
  opacity: 0.15;
  object-fit: cover;
  filter: invert(100%);
  z-index: -1;
`

const Category = styled.div`
  ${tw`font-medium opacity-90`};
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  @media screen and (max-width: 560px) {
    font-size: 1.65rem;
    padding-top: 2rem;
  }
`

const ProjectItem = ({ node, style, testid }) => (
  <Item key={node.fields.slug} style={style} data-testid={testid}>
    <Content>
      <ImageWrapper>
        <Image fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
      </ImageWrapper>
      <Link to={node.fields.slug}>
        <TracedGlow src={node.frontmatter.thumbnail.childImageSharp.fluid.tracedSVG} alt={node.frontmatter.title} />
        <Overlay style={{ backgroundColor: node.frontmatter.color }} />
        <Title>{node.frontmatter.title}</Title>
        <p>{node.frontmatter.desc}</p>
        <Category>{node.frontmatter.category}</Category>
      </Link>
    </Content>
  </Item>
)

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}
