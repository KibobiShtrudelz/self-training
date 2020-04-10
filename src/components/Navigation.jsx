import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Wrapper>
      <Nav>
        <NavItem to="/about">
          ABOUT <span className="icon-fire"></span>
        </NavItem>
        <NavItem to="/e-store">
          E-STORE <span className="icon-leaf"></span>
        </NavItem>
        <NavItem to="/contacts">
          CONTACTS <span className="icon-mail2"></span>
        </NavItem>
      </Nav>
    </Wrapper>
  );
}

export default Navigation;

const Wrapper = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled(Link)`
  width: 100%;
  color: #fff;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 600;
  line-height: 3rem;
  text-align: center;
  text-decoration: none;
  background-color: #171717;

  &:hover {
    color: #000;
    font-size: 1.3rem;
    background-color: #61dbfb;
    transition: font-size 0.25s ease;

    .icon-leaf {
      color: green;
    }
  }

  .icon-fire {
    color: red;
  }

  .icon-leaf {
    color: lime;
  }
`;
