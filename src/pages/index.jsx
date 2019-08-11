/* eslint react/display-name: 0 */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'
// Components
import { Hero, Layout, ProjectItem } from '../components'

const Wrapper = styled.div`
  ${tw`relative w-full h-auto pin-t my-0 mx-auto`}
  z-index: -999;
`

const ListWrapper = styled.div`
  ${tw`w-full`}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  background: #F6F8FA;
`

const Index = ({
  data: {
    allMdx: { edges: projectEdges },
  },
  location,
}) => {
  const trail = useTrail(projectEdges.length, {
    from: { height: '0%' },
    to: { height: '100%' },
  })

  return (
    <Layout pathname={location.pathname}>
    <Hero />
      <Wrapper>
        <ListWrapper>
          {trail.map((style, index) => (
            <ProjectItem
              testid={`projectItem-${index}`}
              style={style}
              key={projectEdges[index].node.fields.slug}
              node={projectEdges[index].node}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            color
            title
            desc
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 720, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
