import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CookieConsent from "react-cookie-consent"
import { StyledCookieConsentWrapper,  } from "./styles"

const GooglePlayButton = () => {
  const { t } = useTranslation()

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
      >
        {t("cookiesText")}
      </CookieConsent>
    </StyledCookieConsentWrapper>
  )
}

export default GooglePlayButton
