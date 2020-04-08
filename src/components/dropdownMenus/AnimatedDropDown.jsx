import React from "react";
import styled from "styled-components";

function AnimatedDropDown() {
  return (
    <Wrapper>
      <p>Animated DropDown Menu. Hover me!</p>
      <Ul id="list">
        <li>dsadadsa</li>
        <li>sfasdgagsaf</li>
        <li>gsffsfefavdv</li>
        <li>ssccsawdwd</li>
        <li>awdffcsssff</li>
      </Ul>
    </Wrapper>
  );
}

export default AnimatedDropDown;

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  text-decoration: underline;

  &:hover #list {
    max-height: 500px;
    transition: max-height 1.5s ease-in;
  }

  p {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  padding: 0;
  color: #000;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  list-style: none;
  border-radius: 10px;
  border: 1px solid #000;

  li {
    padding: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #fff;
      background-color: #171717;
    }
  }
`;
