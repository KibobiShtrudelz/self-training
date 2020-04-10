import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const navigationTabs = [
  {
    title: "HOME",
    path: "/",
    exact: true,
    icon: "icon-home",
  },
  {
    title: "ABOUT",
    path: "/about",
    icon: "icon-fire",
  },
  {
    title: "E-STORE",
    path: "/e-store",
    icon: "icon-leaf",
  },
  {
    title: "COTACTS",
    path: "/contacts",
    icon: "icon-pen",
  },
];

const Navigation = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  return (
    <Wrapper>
      <Nav>
        <Nav>
          {navigationTabs.map((tab) => (
            <NavItem
              exact={tab.exact}
              key={tab.path}
              to={tab.path}
              activeClassName="active"
              isActive={() => pathname === tab.path}
            >
              {tab.title}
              <span className={tab.icon} />
            </NavItem>
          ))}
        </Nav>
      </Nav>
    </Wrapper>
  );
};

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
  width: 100%;
  display: flex;
`;

const NavItem = styled(NavLink)`
  width: 100%;
  color: #fff;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 600;
  line-height: 3rem;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  background-color: #171717;
  border: 5px solid #171717;
  outline: none;

  &:hover {
    font-size: 1.3rem;
    border-bottom: 5px solid #fff;
    transition: font-size 0.25s ease;
    transition: border-bottom 0.25s ease;

    .icon-leaf {
      color: green;
    }
  }

  &.active {
    font-size: 1.3rem;
    border-bottom: 5px solid #fff;
    transition: font-size 0.25s ease;
    transition: border-bottom 0.25s ease;
  }

  .icon-home {
    color: orange;
  }

  .icon-fire {
    color: red;
  }

  .icon-leaf {
    color: lime;
  }

  .icon-pen {
    color: lightBlue;
  }
`;
