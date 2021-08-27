import styled from "styled-components"

export const StyledTextareaWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  width: 100%;
`

export const StyledTextarea = styled.textarea`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.title};
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  position: relative;
  min-width: 100%;
  max-width: 100%;
  min-height: 7rem;
  max-height: 15rem;
  font: inherit;

  :focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.title};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.title};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.title};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.title};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${({ theme }) => theme.colors.primary} inset !important;
  }

  ${({ errorText, theme }) =>
    `border-color: ${errorText ? theme.colors.red : ""};
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 12rem;
  }
`

export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
`

export const StyledTextareaError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  min-height: 13rem;
  max-height: 26rem;
`
