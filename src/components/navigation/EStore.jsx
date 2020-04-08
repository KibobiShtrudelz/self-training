import React from "react";
import styled from "styled-components";

function EStore() {
  console.log("HOOKS loaded");
  return <Wrapper>HOOOOOOOOOOOOOOOOOOOKS</Wrapper>;
}

export default EStore;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  border: 2px solid #61dbfb;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  box-sizing: border-box;
`;
