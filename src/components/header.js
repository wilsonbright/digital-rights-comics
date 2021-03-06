import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "normalize.css"

const Header = ({ siteTitle }) => (
  <div>
    <header
        style={{
          padding: `1rem 0.5rem`,
        }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `5rem 0 2rem`,
        }}
      >
        <h1 style={{ margin: 0, fontFamily: `Archivo Black` }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontWeight: 900,
              fontSize: `2.3rem`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p style={{ fontStyle: `italic`, fontSize: `1.2em`, fontWeight: `500` }}>
          Make Humour that Matters
        </p>
        <a href="https://www.producthunt.com/posts/digital-rights-comics?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-digital-rights-comics" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=272213&theme=dark" alt="Digital Rights Comics - Make humour that matters | Product Hunt"></img></a>
      </div>
        <p style={{ background: `#ffffffcc`, borderRadius: `6px`, display: `inline-block`, boxShadow: `0 4px 6px -2px #ffffff88`, padding: `8px 14px`, color: `black`, fontSize: `1em`, fontWeight: `500` }}>
          <a style={{textDecoration: `none`, color: `black`}} href="/rss.xml">RSS Feed</a> &nbsp;<span style={{fontSize: `1em`, fontWeight: `300`}}>•</span>&nbsp; <a style={{textDecoration: `none`, color: `black`}} href="/tags">All Tags</a>
          &nbsp;&nbsp;<span style={{fontSize: `1em`, fontWeight: `300`}}>•</span>&nbsp; <a style={{textDecoration: `none`, color: `black`}} href="https://blocksurvey.io/survey/1DnQ8ArNjQU8Xrf97BbaNNLbFeJTksxHYC/025415f8-5648-4b73-a1a9-4e91b0562f2c" rel="noreferrer" target='_blank'>Submit</a>
          &nbsp;&nbsp;<span style={{fontSize: `1em`, fontWeight: `300`}}>•</span>&nbsp; <a style={{textDecoration: `none`, color: `black`}} href="https://blocksurvey.io/survey/1DnQ8ArNjQU8Xrf97BbaNNLbFeJTksxHYC/4ca5ad58-5b7d-4b83-bdda-3481a503c787" rel="noreferrer" target='_blank'>Subscribe</a>
        </p>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Digital Rights Comics`,
  siteDescripton: 'Make humour that matters'
}

export default Header
