import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { CookieBar, Footer } from ".."
import { GlobalStyle } from "../../../themes/global-style"
import { ThemeContextProvider } from "../../../hooks/theme"
import { StyledMain } from "./styles.js"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyle />
        <StyledMain>{children}</StyledMain>
        <Footer />
        <CookieBar />
      </ThemeContextProvider>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
