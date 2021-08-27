import styled from "styled-components"
import { Button } from "../.."
import { StyledSection } from "../../../themes/global-style"

export const StyledContacts = styled(StyledSection)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.shadow};
`

export const StyledContactsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: center;
    column-gap: 3rem;

    // for safari below 14.1 that not supports gap with flexbox
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        margin: -1.5em;
        & > * {
          margin: 1.5em;
        }
      }
    }
  }
`

export const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`

export const StyledTitle = styled.p`
  display: block;
  font-size: 110%;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 400;
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 3rem;
  }
`

export const StyledFormItem = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const StyledFormItems = styled.div`
  display: flex;

  & ${StyledFormItem} {
    margin-left: 0.5rem;

    &:first-child {
      margin-left: 0;
      margin-right: 0.5rem;
    }
  }
`

export const StyledButton = styled(Button)`
  margin: 2rem 0 0 auto;
  font-size: 110%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 6rem;
  }
`
