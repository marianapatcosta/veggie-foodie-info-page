import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  StyledImageContent,
  StyledImageText,
  StyledNumber,
  StyledImageWrapper,
  StyledImage,
  StyledImagePlaceholder,
} from "./styles"

const GifImage = ({ src, text, number }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  return (
    <StyledImageContent>
      <StyledImageText>
        <StyledNumber>{number}.</StyledNumber>
        {text}
      </StyledImageText>
      <StyledImageWrapper>
        {!isImageLoaded && <StyledImagePlaceholder />}
        <StyledImage
          isImageLoaded
          src={src}
          alt={text}
          onLoad={() => setIsImageLoaded(true)}
        />
      </StyledImageWrapper>
    </StyledImageContent>
  )
}

GifImage.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number,
}

GifImage.defaultProps = {
  src: "",
  text: "",
  number: null,
}

export default GifImage
