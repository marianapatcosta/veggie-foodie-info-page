import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
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
  const [isOnTop, setIsOnTop] = useState(true)
  const { language, languages, originalPath } = useI18next()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () =>
      setIsOnTop(window.pageYOffset < window.screen.height)

    if (!!window) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleIsMenuOpened = () =>
    setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened)

  const scrollToTop = () => {
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
  const { defaultLanguage, language } = useI18next()
  const navLinks = [
    {
      label: t("about"),
      url: `/${defaultLanguage !== language ? `${language}/` : ""}#about`,
    },
    {
      label: t("privacyPolicy"),
      url: `/${defaultLanguage !== language ? `${language}/` : ""}#privacy`,
    },
    {
      label: t("contacts"),
      url: `/${defaultLanguage !== language ? `${language}/` : ""}#contacts`,
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
