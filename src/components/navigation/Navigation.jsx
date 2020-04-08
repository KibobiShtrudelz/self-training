import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Wrapper>
      <Nav>
        <NavItem to="/e-store">E-STORE</NavItem>
        <NavItem to="/contacts">CONTACTS</NavItem>
        <NavItem to="/about">ABOUT</NavItem>
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
    font-size: 1.5em;
    background-color: #61dbfb;
    transition: font-size 0.25s ease;
  }
`;
