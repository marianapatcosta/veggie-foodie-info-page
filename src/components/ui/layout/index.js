import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Footer } from ".."
import { GlobalStyle } from "../../../themes/global-style"
import { StyledMain } from "./styles.js"
import { ThemeContextProvider } from "../../../hooks/theme"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyle />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </ThemeContextProvider>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
