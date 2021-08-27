import styled from "styled-components"
import { StyledSection } from "../../../themes/global-style"

export const StyledAbout = styled(StyledSection)`
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.shadow};
`

export const StyledSectionMain = styled.div`

`

export const StyledAboutMe = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    margin-bottom: 2rem;
  }
`
