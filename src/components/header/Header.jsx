import React from "react";
import styled from "styled-components";

function Header({ children }) {
  return <Wrapper className="app-wrapper">{children}</Wrapper>;
}

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  color: #fff;
  width: 100%;
  height: 90px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #303030;
`;
