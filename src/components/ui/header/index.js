import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { Logo } from "../../../images"
import "./styles.css"
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderLogo,
  StyledNavBar,
  StyledNavBarMobile,
  StyledScrollSpy,
  StyledHeaderRightSide,
  StyledNavBarLink,
  StyledLanguages,
  StyledLanguage,
  StyledToggleThemeButton,
  StyledMenuIcon,
} from "./styles"

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isOnTop, setIsOnTop] = useState(false)
  const { language, languages, originalPath } = useI18next()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () =>
      setIsOnTop(window.pageYOffset < window.screen.height)

    if (!!window && window.location.pathname === "/") {
      setIsOnTop(true)
      window.addEventListener("scroll", handleScroll)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleIsMenuOpened = () =>
    setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened)

  const scrollToTop = () => {
    window.location.pathname !== "/" && navigate("/")
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <StyledHeader isMenuOpened={isMenuOpened} isOnTop={isOnTop}>
      <StyledHeaderWrapper>
        <StyledHeaderLogo
          src={Logo}
          alt="veggie foodie logo"
          isOnTop={isOnTop}
          onClick={scrollToTop}
        />
        <StyledHeaderRightSide>
          <StyledNavBar>
            <NavBar isOnTop={isOnTop} />
          </StyledNavBar>
          <StyledLanguages>
            {languages.map(lng => (
              <li key={lng}>
                <StyledLanguage
                  to={originalPath}
                  language={lng}
                  $isCurrentLanguage={lng === language}
                >
                  {lng}
                </StyledLanguage>
              </li>
            ))}
          </StyledLanguages>

          <StyledToggleThemeButton />
          <StyledMenuIcon
            aria-label={t("openNavMenu")}
            isMenuOpened={isMenuOpened}
            onClick={toggleIsMenuOpened}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledMenuIcon>
        </StyledHeaderRightSide>
      </StyledHeaderWrapper>
      <StyledNavBarMobile isMenuOpened={isMenuOpened}>
        <NavBar isOnTop={isOnTop} />
      </StyledNavBarMobile>
    </StyledHeader>
  )
}

const NavBar = ({ isOnTop }) => {
  const { t } = useTranslation()
  const navLinks = [
    {
      label: t("about"),
      url: "/#about",
    },
    {
      label: t("privacyPolicy"),
      url: "/#privacy",
    },
    {
      label: t("contacts"),
      url: "/#contacts",
    },
  ]
  return (
    <StyledScrollSpy
      columnsNumber={navLinks.length}
      items={navLinks.map(({ url }) => url.split("/#")[1])}
      currentClassName="active"
    >
      {navLinks.map(({ label, url }) => (
        <li key={`navlink-${label}`}>
          <StyledNavBarLink
            to={url}
            href={`/${url}`}
            stripHash
            isOnTop={isOnTop}
          >
            {label}
          </StyledNavBarLink>
        </li>
      ))}
    </StyledScrollSpy>
  )
}

NavBar.propTypes = {
  isOnTop: PropTypes.bool,
}

NavBar.defaultProps = {
  isOnTop: false,
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
