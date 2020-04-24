import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Login from "../pages/login/HeaderLogin";
import Logout from "../Logout";

const Header = ({ children, openLoginModal }) => {
  const { email } = JSON.parse(localStorage.getItem("loginCredentials"));
  const [userEmail, setUserEmail] = useState(email || "");

  useEffect(() => {
    setUserEmail(email);
  }, [email]);

  return (
    <Wrapper>
      {children}
      {userEmail ? (
        <WelcomeUserMsg>
          Hello, {userEmail}!<Logout />
        </WelcomeUserMsg>
      ) : (
        <Login openLoginModal={openLoginModal} />
      )}
    </Wrapper>
  );
};

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

const WelcomeUserMsg = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 100px;

  .logout {
    cursor: pointer;
    margin-left: 5px;
    font-weight: normal;
    text-decoration: underline;
  }
`;
