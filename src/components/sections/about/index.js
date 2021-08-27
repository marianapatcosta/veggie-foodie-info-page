import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StyledSectionTitle } from "../../../themes/global-style"
import { useTheme } from "../../../hooks/theme"
import { GifImage, GooglePlayButton } from "../.."
import {
  AddDark,
  AddLight,
  ExploreDark,
  ExploreLight,
  ShareDark,
  ShareLight,
} from "../../../images"
import {
  StyledAbout,
  StyledSectionMain,
  StyledAboutText,
  StyledImages,
  StyledLinkWrapper,
} from "./styles"

const About = () => {
  const { t } = useTranslation()
  const { isDarkTheme } = useTheme()
  const images = [
    { src: isDarkTheme ? AddDark : AddLight, text: t("addItems") },
    { src: isDarkTheme ? ExploreDark : ExploreLight, text: t("exploreItems") },
    { src: isDarkTheme ? ShareDark : ShareLight, text: t("shareItems") },
  ]

  return (
    <StyledAbout id="about">
      <StyledSectionTitle>{t("aboutVeggieFoodie")}</StyledSectionTitle>
      <StyledSectionMain>
        <StyledAboutText>{t("description")}</StyledAboutText>
        <StyledImages>
          {images.map(({ src, text }, index) => (
            <GifImage
              key={`app-gif-${index}`}
              number={index + 1}
              src={src}
              text={text}
            />
          ))}
        </StyledImages>
      </StyledSectionMain>
      <StyledLinkWrapper>
        <p>{t("tryIt")}</p>
       <GooglePlayButton />
      </StyledLinkWrapper>
    </StyledAbout>
  )
}

export default About
