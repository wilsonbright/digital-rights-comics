
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"

import { kebabCase } from 'lodash';

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout>
      <SEO title="Tags" />
      <div style={{padding: `1rem 0`}}>
        <h1 style={{textAlign: `center`}}>Tags</h1>
        <div style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
          alignItems: `center`,
          maxWidth: `600px`,
          margin: `auto`
        }}>
          {allTags.map(tag => (
            <div key={tag.fieldValue} style={{
              margin: `0.8em 0.4em`
            }}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{
                padding: `8px 14px`,
                background: `#0059ff`,
                borderRadius: `6px`,
                textDecoration: `none`,
                color: `white`,
                fontSize: `0.8rem`,
              }}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;