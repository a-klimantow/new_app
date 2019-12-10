import React from "react"
import { NavLink } from "react-router-dom"
import styled from "reshadow/macro"

import { layloutStyle, navitemStyle } from "./styles"

export default ({ children }) => {
  return styled(
    layloutStyle,
    navitemStyle
  )(
    <layout>
      <aside>
        <nav>
          <NavLink to="/tasks" activeClassName={navitemStyle.active}>
            tasks
          </NavLink>
          <NavLink to="/objects" activeClassName={navitemStyle.active}>
            objects
          </NavLink>
          <NavLink to="/settings" activeClassName={navitemStyle.active}>
            settings
          </NavLink>
          <NavLink to="/login" activeClassName={navitemStyle.active}>
            exit
          </NavLink>
        </nav>
      </aside>
      <main>{children}</main>
    </layout>
  )
}
