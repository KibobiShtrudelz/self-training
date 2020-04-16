import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderLogin = () => {
  return (
    <Wrapper className="login-wrapper">
      <NavLink to="/e-store">
        Login <span className="icon-user-check" />
      </NavLink>
      <span>or</span>
      <NavLink to="">
        Register <span className="icon-user-plus" />
      </NavLink>
    </Wrapper>
  );
};

export default HeaderLogin;

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
