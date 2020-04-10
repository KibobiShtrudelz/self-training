import React from "react";
import styled from "styled-components";

import StoreItem from "./StoreItem";

function EStore() {
  let items = [];

  for (let i = 0; i < 30; i++) {
    items.push(<StoreItem key={i} />);
  }

  return <Wrapper>{items}</Wrapper>;
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
