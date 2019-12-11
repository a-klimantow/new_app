import { css } from "reshadow/macro"

export default css`
  input {
    font: inherit;
    outline: none;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px solid;
    border-color: rgba(39, 47, 90, 0.15);
    color: rgba(39, 47, 90, 1);
    background-color: #fff;
    padding: 0 1em;
    min-height: 32px;
    font-size: 0.875rem;

    &::placeholder {
      color: rgba(39, 47, 90, 0.15);
    }

    &[data-size="small"] {
      min-height: 24px;
      font-size: 0.75rem;
    }
    &[data-size="big"] {
      min-height: 40px;
      font-size: 1rem;
    }
  }
`
