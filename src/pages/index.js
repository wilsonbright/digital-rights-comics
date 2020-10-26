import { kebabCase } from 'lodash';
import React from "react"
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareButtons from "../components/share"

import '../styles/index.css'

let origin = "";
if (typeof window !== "undefined") {
  origin = window.location.origin;
}

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
    <SEO/>
    <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item">
          <div className="post-list__content">
            <h1>{post.node.frontmatter.title}</h1>
            <p>{post.node.frontmatter.date}</p>
          </div>
            <div className="post-list__thumbnail">
              <Link to={post.node.fields.slug}>
                <Img
                  fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
              </Link>
            </div>

            {post.node.frontmatter.tags ? (
              <div className="tags-container">
                <ul className="taglist">
                  {post.node.frontmatter.tags.map(tag => (
                    <div key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}style={{
                        padding: `8px 14px`,
                        background: `#0059ff`,
                        display: `inline-flex`,
                        borderRadius: `6px`,
                        textDecoration: `none`,
                        color: `white`,
                        fontSize: `0.8rem`
                        }}>
                        {tag}
                      </Link>
                    </div>
                  ))}
                  <ShareButtons title={post.node.frontmatter.title} url={origin+post.node.fields.slug}/>
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                   base64
                   aspectRatio
                   src
                   srcSet
                   sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;