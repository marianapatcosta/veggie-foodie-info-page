import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    body {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.font};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 1rem;
        line-height: 2rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.1rem;;
        }

        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar {
          width: 0.5rem !important;
          background-color: ${({ theme }) => theme.colors.disabled};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.primary};
          -webkit-border-radius: 0.5rem; 
          border-radius: 0.5rem; 
        }
    }

    * {
        margin: 0;
        padding: 0;
    }

    * :focus {
      outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
    }

    * :focus:not(:focus-visible) {
      outline: none;
    }

    * ::selection {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
`

export const StyledSection = styled.section`
  padding: 4rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem;
  }
`

export const StyledSectionTitle = styled.h2`
  font-size: 200%;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 400;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 4rem;
    margin-bottom: 3rem;
  }
`
