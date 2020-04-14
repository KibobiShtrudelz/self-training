import React from "react";
import styled from "styled-components";

function StoreItem({ title, imgUrl }) {
  return (
    <Wrapper className="store-item">
      <img src={imgUrl} alt="picsum" />
      {/* {title} */}
    </Wrapper>
  );
}

export default StoreItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
