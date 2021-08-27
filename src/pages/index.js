import React from "react"
import { graphql } from "gatsby"
import {
  About,
  Contacts,
  Intro,
  Layout,
  PrivacyPolicy,
  SEO as Seo,
} from "../components"

const IndexPage = ({ data: pageData }) => (
  <Layout>
    <Seo title="Veggie Foodie" />
    <Intro
      authorName={pageData.site.siteMetadata.authorName}
      authorRole={pageData.site.siteMetadata.authorRole}
    />
    <About />
    <PrivacyPolicy privacyInfo={pageData.markdown.edges[0].node} />
    <Contacts />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery($language: String!) {
    site {
      siteMetadata {
        title
        author
        authorName
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdown: allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            language
          }
        }
      }
    }
  }
`
