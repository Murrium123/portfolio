import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './theme.js'
import Header from './Header/header'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.body};
    margin: 0;
  }
`

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.body};
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={Theme}>
          <React.Fragment>
            <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Montserrat|Staatliches" rel="stylesheet"/>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
            </Helmet>
            <GlobalStyle></GlobalStyle>
            <Wrapper>
              <Header/>
              <main id="main">
                {children}
              </main>
            </Wrapper>
          </React.Fragment>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
