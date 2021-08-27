import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styles"

const Button = ({ label, icon, onClick, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {!!icon && <img src={icon} alt={`${label} icon`} />}
      <span>{label}</span>
    </StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  id: "",
  label: "",
  className: "",
  disabled: false,
  icon: "",
  type: "button",
  onClick: () => null,
}

export default Button
