import React from "react";
import styled from "styled-components";

import Login from "../pages/login/HeaderLogin";

const Header = ({ children, openLoginModal }) => (
  <Wrapper>
    {children}
    <Login openLoginModal={openLoginModal} />
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  color: #fff;
  width: 100%;
  height: 90px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #303030;

  .login-wrapper {
    margin-right: 100px;
  }
`;
