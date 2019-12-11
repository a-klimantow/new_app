import { css } from "reshadow/macro"

export const defaultFieldAndButton = css`
  button,
  input {
    outline: none;
    border-radius: 0.25rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    border: 1px solid;
    font: inherit;
    color: #272f5a;
    padding: 0 1em;
    min-height: 32px;
    font-size: 0.875rem;
    transition: border-color 0.3s ease;
    border-color: rgba(29, 38, 84, 0.15);
  }

  button[data-size="small"],
  input[data-size="small"] {
    min-height: 24px;
    font-size: 0.75rem;
  }

  button[data-size="big"],
  input[data-size="big"] {
    min-height: 40px;
    font-size: 1rem;
  }
`

export const defaultInput = css`
  input:hover,
  input:focus,
  input:active {
    border-color: #189ee9;
  }
`

export const defaultLink = css`
  a {
    outline: none;
  }
`
