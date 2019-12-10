import { css } from "reshadow/macro"

export const tabStyle = css`
  tabmenu {
    display: flex;
    border-bottom: 1px solid;
    border-color: inherit;
  }

  tab {
    padding: 4px 16px 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 0;
      height: 2px;
      background-color: #189ee9;
      transition: width 0.2s ease;
    }
  }

  .active {
    color: #189ee9;
    &::before {
      width: 100%;
    }
  }
`

export const paperStyle = css`
  paper {
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 16px 24px;
    display: grid;
    grid-gap: 24px;
    align-items: start;
    color: rgba(39, 47, 90, 0.65);
    font-size: 14px;
  }
`
