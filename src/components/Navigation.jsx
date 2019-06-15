import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FaGithub, FaDribbble, FaDeviantart } from 'react-icons/fa'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import config from '../../config/website'
import PageLink from './PageLink.jsx'

const Wrapper = styled.header`
  ${tw`flex relative items-center shadow-down px-0 py-4 z-999`};
  background: rgba(255,255,255,0.2);
  a {
    ${tw`no-underline z-99`};
    color: ${props => props.theme.colors.black};
    transition: all 300ms ease-in-out;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    ${tw`flex-wrap px-0 py-4`};
  }
`

const Nav = styled.nav`
  ${tw`flex flex-1 justify-start font-title`};
  transition: all 350ms ease-in-out;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a:not(:first-child) {
    ${tw`ml-4`};
  }
  a {
    &.external::after {
      content: '*';
      color: #000;
      opacity: 0;
      transition: all 350ms ease-in-out;
    }
    &:hover {
      ${tw`tracking-wide`};
      &.external::after { 
        opacity: 0.35;
      }
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    ${tw`px-4 py-0`};
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`

const Name = styled.div`
  ${tw`flex flex-1 justify-center`};
  a {
    ${tw`font-title text-xl font-bold`};
    &:hover,
    &:focus {
      ${tw`text-black no-underline`};
    }
    &:hover {
      ${tw`tracking-wider`};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    flex: 1 0 100%;
    order: 1;
    margin-bottom: 0.75rem;
  }
`

const SocialMedia = styled.div`
  ${tw`flex flex-1 justify-end`};
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    ${tw`relative text-2xl`};
    line-height: 20px;
    &:last-child {
      font-size: 1.35rem;
      top: 2px;
    }
  }
  a:not(:first-child) {
    ${tw`ml-4`};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    ${tw`px-4 py-0`};
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

// Grabs all MDX files from src/pages and puts them into the navigation

const Navigation = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Wrapper data-testid='navigation'>
        <Nav>
          {data.nav.edges.map((nav, index) => (
            <PageLink
              key={nav.node.fields.slug}
              to={nav.node.fields.slug}
              direction='down'
            >
              {nav.node.frontmatter.title}
            </PageLink>
          ))}
          <a href='https://tterb-gatsby.netlify.com' className='external' target='_blank'>Code</a>
        </Nav>
        <Name>
          <PageLink to='/' direction='up'>
            {config.siteTitle}
          </PageLink>
        </Name>
        <SocialMedia>
          <a href={`https://www.github.com/`+config.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FaGithub />
          </a>
          <a href={`https://www.dribbble.com/`+config.dribbble} target='_blank' rel='noopener noreferrer' aria-label='Dribbble'>
            <FaDribbble />
          </a>
          <a href={`https://www.deviantart.com/`+config.deviantart} target='_blank' rel='noopener noreferrer' aria-label='DeviantArt'>
            <FaDeviantart />
          </a>
        </SocialMedia>
      </Wrapper>
    )}
  />
)

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
