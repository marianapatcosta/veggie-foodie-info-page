import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StyledSectionTitle } from "../../../themes/global-style"
import { StyledAbout, StyledSectionMain } from "./styles"

const PrivacyPolicy = ({ privacyInfo }) => {
  const { t } = useTranslation()

  return (
    <StyledAbout id="privacy">
      <StyledSectionTitle>{t("privacyPolicy")}</StyledSectionTitle>
      <StyledSectionMain
        dangerouslySetInnerHTML={{ __html: privacyInfo.html }}
      ></StyledSectionMain>
    </StyledAbout>
  )
}

PrivacyPolicy.propTypes = {
  privacyInfo: PropTypes.object,
}

PrivacyPolicy.defaultProps = {
  privacyInfo: {},
}

export default PrivacyPolicy
