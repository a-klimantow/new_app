import React from "react"
import styled, { css } from "reshadow/macro"

import { Input, Button } from "components/ui"

const loginpageStyle = css`
  loginpage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 38px;
    font-weight: 300;
    line-height: 46px;
    margin-bottom: 32px;
  }

  form {
    width: 320px;
    display: grid;
    grid-gap: 24px;
  }
`

export default () => {
  return styled(loginpageStyle)(
    <loginpage as="main">
      <h1>Вход в систему</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Input label="username" placeholder="helo" disabled />
        <Input label="password" />
        <Button size="big" view="primary">
          Вход в систему
        </Button>
      </form>
    </loginpage>
  )
}
