import React from "react";
import styled from "styled-components";

function StoreItem() {
  return <Wrapper className="store-item">STORE ITEM</Wrapper>;
}

export default StoreItem;

const Wrapper = styled.div`
  width: 250px;
  height: 230px;
  display: flex;
  border: 1px solid #fff;
`;
