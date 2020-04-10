import React from "react";
import styled from "styled-components";

function StoreItem({ imgUrl }) {
  return (
    <Wrapper className="store-item">
      <img src={imgUrl} alt="picsum" />
    </Wrapper>
  );
}

export default StoreItem;

const Wrapper = styled.div`
  width: 250px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;
