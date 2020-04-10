import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SideMenu() {
  let sideMenuTabs = [];

  return (
    <Wrapper className="side-menu">
      <ul>
        <li>
          <Link to="/">
            <span className="icon-home" />
          </Link>
        </li>
        {sideMenuTabs}
      </ul>
    </Wrapper>
  );
}

export default SideMenu;

const Wrapper = styled.div`
  top: 138px;
  position: fixed;
  z-index: 1;
  width: 80px;
  height: calc(100% - 138px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    li {
      width: 100%;
      height: 80px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255, 255, 255, 0.2);

      span {
        font-size: 2rem;
      }
    }
  }
`;
