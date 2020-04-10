import React, { useState } from "react";
import styled from "styled-components";

const ClickableDropdown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function showMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <ClickableDropdownWrapper showMenu={isMenuVisible}>
      <p>
        Hello Guest! <span onClick={showMenu}>Got Account?</span>
      </p>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </ClickableDropdownWrapper>
  );
};

export default ClickableDropdown;

const ClickableDropdownWrapper = styled.div`
  width: 200px;
  display: flex;
  padding-right: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 3rem;

    span {
      cursor: pointer;
      padding-left: 5px;
      text-decoration: underline;
    }
  }

  ul {
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
    margin: 0;
    padding: 3px 0 0 0;
    width: 200px;
    list-style: none;
    box-shadow: 0px 0px 5px 0px #d1d1d1;

    li {
      padding: 5px 5px 5px 10px;

      &:hover {
        color: #fff;
        cursor: pointer;
        background-color: lightgreen;
      }
    }
  }
`;
