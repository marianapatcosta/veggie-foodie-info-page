import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Header } from "../.."
import {
  StyledIntro,
  StyledIntroContent,
  StyledTitle,
  StyledSubtitle,
  StyledGooglePlayButton,
} from "./styles"

const Intro = () => {
  const { t } = useTranslation()

  return (
    <StyledIntro id="intro">
      <Header />
      <StyledIntroContent>
        <StyledTitle>{t("veggieFoodie")}</StyledTitle>
        <StyledSubtitle>{t("header")}</StyledSubtitle>
       <StyledGooglePlayButton />
      </StyledIntroContent>
    </StyledIntro>
  )
}

export default Intro
