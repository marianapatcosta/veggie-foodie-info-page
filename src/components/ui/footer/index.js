import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as Icons from "../../../icons"
import { StyledFooter, StyledLinks, StyledLink } from "./styles"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          authorName
        }
      }
      contacts: allContactsJson {
        edges {
          node {
            label
            icon
            url
          }
        }
      }
    }
  `)
  const { site, contacts } = data
  const { t } = useTranslation()
  return (
    <StyledFooter>
      <StyledLinks>
        {contacts.edges.map(({ node }) => (
          <StyledLink
            key={`link-to-${node.label}`}
            href={node.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={`${t("findMe")} ${node.label}`}
          >
            <img src={Icons[node.icon]} alt={`${node.label} icon`} />
          </StyledLink>
        ))}
      </StyledLinks>
      <p>{`©${new Date().getFullYear()} - ${t("designedAndDeveloped", {
        authorName: site.siteMetadata.authorName,
      })}`}</p>
    </StyledFooter>
  )
}

export default Footer
