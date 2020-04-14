import React from "react";
import styled from "styled-components";

import StoreItem from "./StoreItem";

function EStore() {
  let items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <StoreSectionsWrapper className="store-selection-wrapper">
        <StoreItem
          key={i}
          className="store-item"
          title="TITLE"
          imgUrl="https://picsum.photos/350/450"
        />

        <StoreSectionLayout className="store-selection-layout" />
      </StoreSectionsWrapper>
    );
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
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

const StoreSectionsWrapper = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  .store-item {
    width: 350px;
    height: 450px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
  }
`;

const StoreSectionLayout = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 1;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  box-shadow: 0 0 0.5rem 0 #171717;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
