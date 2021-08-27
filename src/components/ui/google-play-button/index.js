import React from "react"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { GOOGLE_PLAY_URL } from "../../../constants"
import {
  GooglePlayEn,
  GooglePlayPt,
} from "../../../images"
import { StyledLink } from "./styles"

const GooglePlayButton = () => {
    const { t } = useTranslation()
    const { language } = useI18next()


  return (
    <StyledLink
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={t("googlePlay")}
    >
      <img
        src={language === "en" ? GooglePlayEn : GooglePlayPt}
        alt={t("googlePlay")}
      />
    </StyledLink>
  )
}

export default GooglePlayButton
