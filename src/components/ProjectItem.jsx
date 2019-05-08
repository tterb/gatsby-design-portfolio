import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Image from 'gatsby-image'

const Item = styled(animated.div)`
  position: relative;
  &:before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`

const Content = styled.div`
  ${tw`absolute w-full h-full`};
  top: 0;
  left: 0;
  a {
    ${tw`absolute w-full h-full p-6`};
    /* position: absolute; */
    color: #fff;
    text-decoration: none;
    /* width: 100%; */
    /* height: 100%; */
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 300ms ease-in-out;
    /* padding: 2rem; */
    z-index: 10;
    &:hover {
      color: #fff;
      text-decoration: none;
      opacity: 1;
    }
  }
  p {
    color: rgba(255,255,255,0.8);
    margin: 0.75rem 0 1.25rem;
  }
`

const Title = styled.h2`
  color: rgba(255,255,255,0.95);
  line-height: 1.3;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const ImageWrapper = styled.div`
  > div {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    > div {
      position: static !important;
    }
  }
`

const Overlay = styled.div`
  ${tw`absolute w-full h-full`};
  background-color: ${props => props.theme.brand.primary};
  top: 0;
  left: 0;
  /* opacity: 0.75; */
  z-index: -2;
`

const TracedGlow = styled.img`
  ${tw`absolute w-full h-full object-cover`};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  object-fit: cover;
  filter: invert(100%);
  z-index: -1;
`

const Category = styled.div`
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  opacity: 0.9;
`

const ProjectItem = ({ node, style, testid }) => (
  <Item key={node.fields.slug} style={style} data-testid={testid}>
    <Content>
      <ImageWrapper>
        <Image fluid={node.frontmatter.cover.childImageSharp.fluid} />
      </ImageWrapper>
      <Link to={node.fields.slug}>
        <TracedGlow src={node.frontmatter.cover.childImageSharp.fluid.tracedSVG} alt={node.frontmatter.title} />
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
