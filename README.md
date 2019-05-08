<h1><img src="https://user-images.githubusercontent.com/16360374/52173956-58a45400-2742-11e9-92b3-3e63bda91ef1.png" alt="GatsbyJS" height="50"/> Gatsby Design Portfolio</h1>

<!-- <p align="right">
  <a href="https://circleci.com/gh/tterb/gatsby-design-portfolio"><img src="https://circleci.com/gh/tterb/gatsby-design-portfolio.svg?style=svg" alt="CircleCI"/></a>
</p> -->

A design portfolio website created using [GatsbyJS](https://www.gatsbyjs.org) and [gatsby-starter-portfolio-emma](https://www.gatsbyjs.org/starters/LekoArts/gatsby-starter-portfolio-emma/).  

## Features  

- Multi-page layout
- [TailwindCSS](https://tailwindcss.com/) & [styled-components](https://www.styled-components.com/) for styling
  - Use the full power of TailwindCSS while generating small styles (as unused data gets deleted)
  - Uses `tailwind.macro` (Babel macro) to have hot-reloading of Tailwind styles
- SEO
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- [Typefaces](https://github.com/KyleAMathews/typefaces) for quicker font loading
- WebApp Manifest Support
- Responsive images
  - The right image size for every screen size
  - WebP Support for compatible browsers
  - Lazy-Loading

<br>

**Built with:**  

<p>
  <a href="https://www.gatsbyjs.org/"><img src="https://user-images.githubusercontent.com/16360374/54067385-3051be80-41f4-11e9-9daf-29f910f35427.png" alt="GatsbyJS" height="40"></a>
  <a href="https://reactjs.org/"><img src="https://user-images.githubusercontent.com/16360374/54067296-34c9a780-41f3-11e9-985c-dae0828c2470.png" alt="React" height="40"></a>
  <a href="https://graphql.org/"><img src="https://user-images.githubusercontent.com/16360374/54067380-292ab080-41f4-11e9-9819-6d96fb2124e2.png" alt="GraphQL" height="40"></a>
  <a href="https://www.styled-components.com/"><img src="https://user-images.githubusercontent.com/16360374/54067384-2def6480-41f4-11e9-9e55-a32e72ed23de.png" alt="Styled Components" height="40"></a>
  <a href="https://tailwindcss.com"><img src="https://user-images.githubusercontent.com/16360374/54067382-2b8d0a80-41f4-11e9-8613-98edcad9e89f.png" alt="Tailwind" height="40"></a>
</p>

<!-- [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LekoArts/gatsby-starter-portfolio-emma) [![Edit gatsby-starter-portfolio-emma](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LekoArts/gatsby-starter-portfolio-emma/tree/master/)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emma.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-emma) [![Netlify Status](https://api.netlify.com/api/v1/badges/5a4f3e8c-82cb-411d-89f1-fcfde2d3cf80/deploy-status)](https://app.netlify.com/sites/portfolio-emma/deploys)

- Full-width grid-layout
- Large images
- Light theme

## Why?

If you want to quickly bootstrap a design/photography portfolio or use it as a foundation for your personal site the _gatsby-starter-portfolio_ are a perfect fit for you! The project's goal is to offer minimalistic and fast websites.

I hope you like my starters and create something awesome! To see some of my work you can visit my [website](https://www.lekoarts.de) or support me on [Patreon](https://www.patreon.com/lekoarts) to get some neat rewards (4K images, project files, tutorial insights). Every pledge on Patreon helps me creating more free starters!

Also check out the other _gatsby-starter-portfolio_:

- [gatsby-starter-portfolio-emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia)
- [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella)
- [gatsby-starter-portfolio-cara](https://github.com/LekoArts/gatsby-starter-portfolio-cara)
- [gatsby-starter-portfolio-jodie](https://github.com/LekoArts/gatsby-starter-portfolio-jodie)

Check out the [Gatsby Starter Portfolio Overview](https://gatsby-starter-portfolio.netlify.com/)!

## Features

- Configurable
  - Use the website.js to easily change the most important information
  - Easily change the font
- Choose a color for your projects highlights
- Create your subpages with MDX
- Uses styled-components for styling
- [react-spring](https://github.com/react-spring/react-spring) animations
- Projects in MDX ([gatsby-mdx](https://github.com/ChristopherBiscardi/gatsby-mdx))
- Cypress for End-to-End testing (+ CircleCI config)
- Google Analytics Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive images
  - The right image size for every screen size
  - Traced SVG loading (lazy-loading)
  - WebP support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-emma
cd project-name
npm run dev
```

### Adding a new project

- Create a new folder in `content/projects`
- Create a new markdown/mdx file, add the frontmatter (use the date format "YYYY-MM-DD")
- Add an image and reference it in your frontmatter as `cover`
- Write your content below the frontmatter

If you're still unsure have a look at the already existing examples.

### Adding a new page

- Create a new folder in `src/pages`
- Create a new mdx file with the name `index.mdx` in it

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in `config/website.js`:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleAlt: 'Emma - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteTitleShort: 'Emma', // short_name for manifest
  siteUrl: 'https://emma.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emma', // Twitter Username
  ogSiteName: 'emma', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-12345689-1',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
```

You can also configure the styling of the site by editing the theme variables in `config/theme.js`.

```JS
import { darken } from 'polished'

const brand = {
  primary: '#cf1993',
  secondary: '#7b8acc',
}

const colors = {
  grey: '#6b6b6b',
  black: '#000',
  white: '#fff',
  bg_color: '#f3f3f3',
  body_color: '#444',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
}

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
}

export default theme
```

**Attention:** You also need to edit `static/robots.txt` to include your domain! -->
