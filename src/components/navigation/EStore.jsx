import React from "react";
import styled from "styled-components";

import StoreItem from "../StoreItem";

function EStore() {
  console.log("HOOKS loaded");
  return (
    <Wrapper>
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
    </Wrapper>
  );
}

export default EStore;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  .store-item {
    margin: 10px;
    padding: 15px;
  }
`;
