import styled from "styled-components"
import { StyledSection } from "../../../themes/global-style"

export const StyledAbout = styled(StyledSection)`
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.shadow};

  display: flex;
  flex-direction: column;
`

export const StyledSectionMain = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 60rem;
    margin: 0 auto;
  }
`

export const StyledAboutText = styled.p`
  font-size: 115%;
`

export const StyledImages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: revert;
    justify-content: center;
    margin: 2rem 0 4rem;
    column-gap: 5rem;

    // for safari below 14.1 that not supports gap with flexbox
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        margin: -2.5em;
        & > * {
          margin: 2.5em;
        }
      }
    }
  }
`

export const StyledLinkWrapper = styled.div`
  margin-left: auto;

  p {
    color: ${({ theme }) => theme.colors.title};
    font-size: 150%;
    font-weight: 700;
    margin-left: 1rem;
  }
`
