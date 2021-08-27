import styled from "styled-components"

export const StyledButton = styled.button`
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  line-height: 1.1em;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  user-select: none;
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

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
    cursor: default;

  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.2rem 1rem;
    width: 7rem;
    height: 3rem;
  }

  :hover {
    opacity: 80%;
  }

  img {
    height: 1rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.iconWhite};
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 1.1rem;
    }
  }

  span {
    z-index: 1;
    line-height: 1.3rem;
    height: 1.1rem;
  }
`