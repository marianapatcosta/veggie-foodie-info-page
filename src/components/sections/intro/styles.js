import styled from "styled-components"
import { Cover } from "../../../images"
import { StyledSection } from "../../../themes/global-style"
import { GooglePlayButton } from "../../ui"

export const StyledIntro = styled(StyledSection)`
  height: calc(100vh);
  box-shadow: inset 0 -1rem 0.7rem -1rem
    ${({ theme }) => theme.colors.shadow};
  background-attachment: fixed;
  background-image: linear-gradient(rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.7)),
    url(${Cover});
  background-size: cover;
  background-position: center;
  height: calc(100vh - 3rem);
`

export const StyledIntroContent = styled.div`
  padding: 13rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 18rem 0;
  }
`

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-size: 180%;
  color: ${({ theme }) => theme.colors.white};
  line-height: 3rem;
  opacity: 0.75;
`

export const StyledSubtitle = styled(StyledTitle)`
  font-size: 150%;
  line-height: 2rem;
  margin-top: 1rem;
`

export const StyledGooglePlayButton = styled(GooglePlayButton)`
  margin-left: auto;
  margin-top: 3rem;
  display: inline-block;
  opacity: 0.75;

  :hover {
    opacity: 1;
  }
`
