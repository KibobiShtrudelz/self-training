import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderLoginOrRegister = ({ openLoginModal, openRegistrationModal }) => {
  const { pathname } = useLocation();

  return (
    <Wrapper className="login-wrapper">
      <NavLink to={pathname} onClick={() => openLoginModal(true)}>
        Login <span className="icon-user-check" />
      </NavLink>
      <span>or</span>
      <NavLink to={pathname} onClick={() => openRegistrationModal(true)}>
        Register <span className="icon-user-plus" />
      </NavLink>
    </Wrapper>
  );
};

export default HeaderLoginOrRegister;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  span {
    margin: 0 6px;
  }
`;
