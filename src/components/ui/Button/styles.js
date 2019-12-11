import { css } from "reshadow/macro"

export default css`
  button {
    font: inherit;
    cursor: pointer;
    outline: none;
    border: 1px solid;
    border-color: rgba(39, 47, 90, 0.15);
    border-radius: 0.25rem;
    background-color: #fff;
    color: rgba(39, 47, 90, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    min-height: 32px;
    font-size: 0.875rem;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover,
    &:focus {
      border-color: rgba(24, 158, 233, 1);
    }

    &:active {
      box-shadow: 0 0 0 4px rgba(24, 158, 233, 0.15);
    }

    &[|size="small"] {
      min-height: 24px;
      font-size: 0.75rem;
    }

    &[|size="big"] {
      min-height: 40px;
      font-size: 1rem;
    }
  }

  button[|view="primary"] {
    background-color: rgba(24, 158, 233, 1);
    color: #fff;

    &:hover {
      background-color: rgba(24, 158, 233, 0.7);
    }
  }

  button:not(hover):disabled,
  button[|view="primary"]:not(hover):disabled {
    color: rgba(39, 47, 90, 0.25);
    border-color: rgba(39, 47, 90, 0.15);
    background-color: rgba(39, 47, 90, 0.04);
    cursor: not-allowed;
  }
`
