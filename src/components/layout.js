import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/index.css"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        style={{padding: `1.45rem 0 0`}}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} 
          {` `}
          <a href="https://blocksurvey.io?ref=digitalrights" style={
            {
              color: `inherit`
            }
            }>blocksurvey.io</a> 
            &nbsp;&nbsp;
          <Link to={`/rss.xml`}style={{
              color: `inherit`
              }}>
                RSS Feed
              </Link> 
              &nbsp;&nbsp;
          <Link to={`/tags`}style={{
              color: `inherit`
          }}>
            All Tags
          </Link>
          &nbsp;&nbsp;
          <Link to={`https://github.com/wilsonbright/digital-rights-comics`}style={{
              color: `inherit`
          }}>
            GitHub
          </Link>
          &nbsp;&nbsp;
          <Link to={`https://creativecommons.org/licenses/by-nc/4.0/`}style={{
              color: `inherit`
          }}>
            License
          </Link>
       
        </footer>
      </div>
      

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
