import React from "react"
import styled, { use, css } from "reshadow/macro"
import buttonStyle from "./styles"
import t from "prop-types"

export const Button = ({ children, view, size, icon, ...props }) => {
  const withIcon =
    icon &&
    css`
      button {
        justify-content: space-between;
      }
    `

  return styled(
    buttonStyle,
    withIcon
  )(
    <button {...use({ size, view })} {...props}>
      {children}
      {icon ? <span>{icon}</span> : null}
    </button>
  )
}

Button.propTypes = {
  children: t.string,
  view: t.oneOf(["primary"]),
  siae: t.oneOf(["big", "small"]),
  icon: t.node
}
