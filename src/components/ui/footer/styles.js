import styled from "styled-components"

export const StyledFooter = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  position: relative;
  font-size: 85%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 6rem;
    padding: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 7rem;
    padding: 2rem;
  }
`

export const StyledLinks = styled.div`
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
    padding-left: 30rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 auto;
    padding-left: 40rem;
  }
`

export const StyledLink = styled.a`
  margin: 0 0.75rem;
  img {
    filter: ${({ theme }) => theme.colors.iconWhite};
    width: 1.1rem;
  }

  &:hover img {
    filter: ${({ theme }) => theme.colors.iconHover};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      width: 1.25rem;
    }
  }
`
