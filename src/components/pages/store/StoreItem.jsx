import React from "react";
import styled from "styled-components";

// TODO: add and style title prop
const StoreItem = ({ title, imgUrl }) => {
  return (
    <Wrapper className="store-item" imgUrl={imgUrl}>
      <Divche className="shrink" />
      {/* {title} */}
    </Wrapper>
  );
};

export default StoreItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
`;

const Divche = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
