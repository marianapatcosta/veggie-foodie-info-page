import styled from "styled-components"

export const StyledLink = styled.a`
  :hover {
    opacity: 0.75;
  }

  img {
    width: 10rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 12rem;
    }
  }
`


