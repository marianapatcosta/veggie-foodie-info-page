import styled from "styled-components"

export const StyledCookieConsentWrapper = styled.div`
  .CookieConsent {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 1.5rem 2rem;
    box-shadow: 0 -0.063rem 0.5rem ${({ theme }) => theme.colors.shadow};
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
    }
  }

  .CookieConsent div:first-child {
    max-height: 6rem;
    overflow: scroll;
    white-space: pre-wrap;
    line-height: 1.5rem;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-height: revert;
      overflow: revert;
    }
  }

  .CookieConsent div:nth-child(2) {
    display: flex;
    margin: 1rem auto 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin: 0 0 0 1rem;
    }
  }

  .CookieConsent button {
    font: inherit;
    width: 6rem;
    height: 2.5rem;
    text-decoration: none;
    padding: 1rem;
    margin: 0 1rem 0 0;
    padding: 0.2rem 0.7rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    text-align: center;
    border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
    line-height: 1.1em;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0.3rem 0.05rem ${({ theme }) => theme.colors.buttonShadow};

    :active {
      box-shadow: 0 0.15rem 0.05rem ${({ theme }) => theme.colors.buttonShadow};
      transform: translateY(0.15rem);
      -webkit-transform: translateY(0.15rem);
      -moz-transform: translateY(0.15rem);
      -ms-transform: translateY(0.15rem);
      -o-transform: translateY(0.15rem);
    }
    :hover {
      opacity: 80%;
    }
  }

  #rcc-confirm-button {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  #rcc-decline-button {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
