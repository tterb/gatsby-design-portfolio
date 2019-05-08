import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { animated, useSpring, config } from 'react-spring'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { SEO, Container, Layout, Hero, BGImage } from '../components'

const Content = styled(Container)`
  ${tw`absolute pt-8 pb-8`};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`

const Title = styled(animated.h1)`
  ${tw`mt-16 mb-0`};
  font-size: 5.074rem;
  line-height: 1.1;
`

const Single = ({ data: { mdx }, location }) => {
  const single = mdx.frontmatter

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const contentProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO pathname={location.pathname} postNode={mdx} single />
      <Hero single>
        <BGImage single>
          <Image fluid={single.cover.childImageSharp.fluid} alt="" />
        </BGImage>
        <Content type="text">
          <Title data-testid="single-title" style={titleProps}>
            {single.title}
          </Title>
        </Content>
      </Hero>
      <Container type="text" className="page-content">
        <animated.div style={contentProps}>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </animated.div>
      </Container>
    </Layout>
  )
}

export default Single

Single.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      fields {
        slug
      }
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
