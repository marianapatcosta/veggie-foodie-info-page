import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Scrollspy from "react-scrollspy"
import ToggleThemeButton from "../toggle-theme-button"
import { Link } from "gatsby-plugin-react-i18next"

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.5rem ${({ theme }) => theme.colors.shadow};
  z-index: 10;
  padding: 0 1rem;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  user-select: none;

  ${({ isOnTop, theme }) =>
    isOnTop &&
    `background-color: ${theme.colors.transparent};
    box-shadow: none;
    color: ${theme.colors.primary};`}

  @media (min-width: ${({ theme }) => theme.breakpoints.xm}) {
    padding: 0 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 3rem;
  }
`

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledHeaderLogo = styled.img`
  height: 2rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 3rem;
  }
`

export const StyledHeaderRightSide = styled.div`
  display: flex;
`

export const StyledScrollSpy = styled(Scrollspy)`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ columnsNumber }) =>
      `repeat(${columnsNumber}, minmax(6rem, max-content))`};

    li {
      text-align: center;
    }
  }
`

export const StyledNavBar = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`

export const StyledNavBarMobile = styled.nav`
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  ${({ isMenuOpened }) => isMenuOpened && `height: 6rem;`}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`

export const StyledNavBarLink = styled(AnchorLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  line-height: 100%;
  white-space: nowrap;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.transparent};
  padding: 0.2rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const StyledLanguages = styled.ul`
  list-style: none;
  margin: 0 1rem;
  display: flex;
`

export const StyledLanguage = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.transparent};
  margin: 0 0.3rem;
  font-size: 115%;

  ${({ $isCurrentLanguage }) =>
    $isCurrentLanguage && `pointer-events: none; opacity: 0.5;`}

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 100%;
  }
`

export const StyledToggleThemeButton = styled(ToggleThemeButton)`
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 1rem;
    margin-left: 1rem;
  }
`

export const StyledMenuIcon = styled.button`
  border: none;
  background: none;
  width: 1.5rem;
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 2.5rem;
  margin-top: 0.125rem;
  cursor: pointer;

  span {
    background-color: ${({ theme }) => theme.colors.white};
    display: block;
    height: 0.15rem;
    width: 100%;
    border-radius: 0.625rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    transform-origin: 0.0625rem center;

    ${({ isMenuOpened }) =>
      isMenuOpened &&
      `:nth-child(1) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        :nth-child(2) {
          opacity: 0;
          visibility: hidden;
          transform: translateX(2rem);
        }

        :nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
   `}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`
