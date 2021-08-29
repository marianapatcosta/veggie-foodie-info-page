import styled from "styled-components"

export const StyledImageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3rem;
  width: 12.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 14rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 auto;
    width: revert;
  }
`

export const StyledImageText = styled.p`
  display: flex;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  min-height: 2.5rem;
`

export const StyledNumber = styled.span`
  color: ${({ theme }) => theme.colors.title};
  font-size: 150%;
  margin-right: 0.3rem;
  font-weight: 700;
`

export const StyledImageWrapper = styled.div`
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.75),
    0 0.7rem 1rem rgba(0, 0, 0, 0.75);
  border-radius: 0.75rem;
  padding: 0.1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  width: 12rem;
  height: 24.4rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 13.5rem;
    height: 27.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 15rem;
    height: 30.5rem;
    margin: revert;
  }
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0.75rem;

  ${({ isImageLoaded }) => !isImageLoaded && `visibility: hidden;`}
`

export const StyledImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 13.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 15rem;
  }
`
