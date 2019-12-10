import React from " react"
import styled, { css } from "reshadow/macro"

const listStyle = css`
  list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

export default ({ data = null }) => {
  if (!data) return <div>no data</div>
  return styled(listStyle)(
    <list as="ul">
      {data.map(item => (
        <list-item></list-item>
      ))}
    </list>
  )
}
