import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CookieConsent from "react-cookie-consent"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { useLocation } from "@reach/router"
import { StyledCookieConsentWrapper } from "./styles"

const CookieBar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <StyledCookieConsentWrapper>
      <CookieConsent
        location="bottom"
        buttonText={t("accept")}
        declineButtonText={t("decline")}
        enableDeclineButton={true}
        flipButtons={true}
        cookieName="gatsby-gdpr-google-analytics"
        disableStyles={true}
        onAccept={() => initializeAndTrack(location)}
      >
        {t("cookiesText")}
      </CookieConsent>
    </StyledCookieConsentWrapper>
  )
}

export default CookieBar
