import React from "react";
import styled from "styled-components";

const StoreItem = ({ title, imgUrl, sectionNum }) => {
  return (
    <Wrapper className="store-item" imgUrl={imgUrl}>
      <SectionBorderShadow className="shrink" />
      <h1>{title}</h1>
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

  h1 {
    color: #000;
    padding: 10px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SectionBorderShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
