import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from "../components/seo";

import Layout from '../components/layout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const imageSrc = frontmatter.thumbnail && frontmatter.thumbnail.childImageSharp.sizes.src;
  let origin = "";
  if (typeof window !== "undefined") {
    origin = window.location.origin;
  }
  const finalImage = origin + imageSrc;
  console.log({imageSrc})
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        thumbnail={finalImage}
      />
      
    <Helmet
      meta={[
        {
          name: `og:image`,
          content: finalImage,
        },
        {
          name: `twitter:image`,
          content: finalImage,
        },
      ]}
    />
      <section className="post-main">
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;