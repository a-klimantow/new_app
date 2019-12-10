import { css } from "reshadow/macro"

export const layloutStyle = css`
  layout {
    display: grid;
    grid-template-columns: 208px 1fr;
    height: 100vh;
    overflow: hidden;
  }

  aside {
    color: #272f5a;
  }

  main {
    background-color: #f3f5f6;
    padding: 24px 56px;
    display: grid;
    grid-gap: 24px;
    align-content: start;
    overflow-y: scroll;
  }

  nav {
    display: grid;
    font-size: 14px;
  }
`

export const navitemStyle = css`
  NavLink {
    background-color: white;
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 18px;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      height: 0%;
      transition: height 0.3s ease;
    }

    &::before {
      left: 0;
      width: 100%;
      background-color: #189ee915;
    }

    &::after {
      right: 0;
      width: 2px;
      background-color: #189ee9;
    }
  }

  .active {
    color: #189ee9;
    &::before,
    &::after {
      height: 100%;
    }
  }
`
