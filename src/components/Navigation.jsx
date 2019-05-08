import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaGithub, FaDribbble, FaDeviantart } from 'react-icons/fa'
import styled from 'styled-components'
import config from '../../config/website'
import PageLink from './PageLink.jsx'

const Wrapper = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: rgba(0,0,0,0.1) 0px 5px 15px 0px;
  padding: 1rem 0 1rem 0;
  z-index: 1000;
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0 1rem 0;
    flex-wrap: wrap;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  transition: all 350ms ease-in-out;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a:not(:first-child) {
    margin-left: 1rem;
  }
  a:hover {
    letter-spacing: 0.5px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

// Grabs all MDX files from src/pages and puts them into the navigation

const Navigation = () => {
  let dribbble = config.dribbble
  let github = config.github
  let deviantart = config.deviantart
  return(
    <StaticQuery
      query={query}
      render={data => (
        <Wrapper data-testid='navigation'>
          <Nav>
            {data.nav.edges.map((nav, index) => (
              <PageLink
                key={nav.node.fields.slug}
                to={nav.node.fields.slug}
                direction='right'
                activeClassName='nav-active'
              >
                {nav.node.frontmatter.title}
              </PageLink>
            ))}
          </Nav>
          <Name>
            <PageLink to='/' 
              direction='bottom'
              data-testid='home-title-link'>
              {config.siteTitle}
            </PageLink>
          </Name>
          <SocialMedia>
            <a href={`https://www.dribbble.com/`+dribbble} target='_blank' rel='noopener noreferrer' aria-label='Dribbble'>
              <FaDribbble />
            </a>
            <a href={`https://www.github.com/`+github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
              <FaGithub />
            </a>
            <a href={`https://www.deviantart.com/`+deviantart} target='_blank' rel='noopener noreferrer' aria-label='DeviantArt'>
              <FaDeviantart />
            </a>
          </SocialMedia>
        </Wrapper>
      )}
    />
  )
}

export default Navigation

const query = graphql`
  query NavLinks {
    nav: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
