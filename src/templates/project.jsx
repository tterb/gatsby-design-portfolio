import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import tw from 'tailwind.macro'
import { animated, useSpring, config } from 'react-spring'
import { SEO, Container, Layout, Hero, BGImage, Lightbox } from '../components'

const Content = styled(Container)`
  ${tw`absolute pin-l pin-r pin-b py-8 z-3`};
`

const InfoWrapper = styled(animated.div)`
  ${tw`flex flex-row flex-wrap justify-start m-auto`};
  width: 95%;
`

const Title = styled(animated.h1)`
  ${tw`my-0`};
`

const InfoBlock = styled.div`
  ${tw`flex flex-col mt-4 mr-8 mb-0 ml-0`};
  div:first-child {
    ${tw`text-sm font-bold uppercase mb-2`};
    color: ${props => (props.customcolor ? props.customcolor : props.theme.colors.grey)};
  }
  div:last-child {
    ${tw`text-base pl-0`};
    color: rgba(0,0,0,0.55);
  }
`

const ProjectBody = styled(animated.div)`
  ${tw`m-auto`}
  width: 95%;
  a {
    ${tw`no-underline`}
    color: ${props => (props.customcolor ? props.customcolor : props.theme.colors.primary)};
    &:hover {
      color: ${props => (props.customcolor ? darken(0.15, props.customcolor) : darken(0.15, props.theme.colors.primary))};
    }
  }
`

const Project = ({ data: { mdx: postNode }, location }) => {
  const project = postNode.frontmatter
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })
  const contentProps = useSpring({ config: config.slow, delay: 1000, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout pathname={location.pathname} customSEO>
      <SEO pathname={location.pathname} postNode={postNode} article />
      <Hero>
        <BGImage customcolor={project.color}>
          <Image fluid={project.cover.childImageSharp.fluid} alt={project.title} />
        </BGImage>
        <Content type="text">
          <Title data-testid="project-title" style={titleProps}>
            {project.title}
          </Title>
          <InfoWrapper style={infoProps}>
            { project.client ?
              <InfoBlock customcolor={project.color}>
                <div>Client</div>
                <div>{project.client}</div>
              </InfoBlock> : ""
            }
            <InfoBlock customcolor={project.color}>
              <div>Category</div>
              <div>{project.category}</div>
            </InfoBlock>
            <InfoBlock customcolor={project.color}>
              <div>Date</div>
              <div>{project.date}</div>
            </InfoBlock>
            <InfoBlock customcolor={project.color}>
              <div>Tools</div>
              <div>{project.tools}</div>
            </InfoBlock>
          </InfoWrapper>
        </Content>
      </Hero>
      <Container type="text" className="project-content">
        <ProjectBody style={contentProps} customcolor={project.color}>
          <MDXRenderer>{postNode.code.body}</MDXRenderer>
          {project.image ?
            <Image fluid={project.image.childImageSharp.fluid} alt={project.title} /> :
            <Image fluid={project.cover.childImageSharp.fluid} alt={project.title} />
          }
        </ProjectBody>
      </Container>
    </Layout>
  )
}

export default Project

Project.propTypes = {
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
      excerpt
      fields {
        slug
      }
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      frontmatter {
        title
        date(formatString: "MM.DD.YYYY")
        desc
        color
        category
        client
        tools
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
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
