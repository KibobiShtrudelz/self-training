import React from "react";
import styled from "styled-components";

import StoreItem from "./StoreItem";

function EStore() {
  let items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <StoreSectionsWrapper key={i} className="store-selection-wrapper">
        <StoreItem
          className="store-item"
          title="TITLE"
          imgUrl={`https://picsum.photos/350/450?random=${i}`}
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
  border: 2px solid rgba(255, 255, 255, 0.1);

  .store-item {
    width: 350px;
    height: 450px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    background-color: #202020;
    transform: rotate(0deg);

    :hover {
      transform: rotate(-5deg);
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.5s ease-out;

      img {
        transform: rotate(15deg);
        transition: all 0.5s ease-out;
      }
    }

    :not(:hover) {
      transform: rotate(0deg);
      background-color: #303030;
      transition: all 0.5s ease-in;

      img {
        transform: rotate(0deg);
        transition: all 0.5s ease-in;
      }
    }

    img {
      border: 1px solid #202020;
      border-right: 3px solid #202020;
      border-bottom: 3px solid #202020;
      border-radius: 5px;
      box-shadow: 5px 5px 5px 0px #171717;
      display: flex;
    }
  }

  :nth-child(3),
  :nth-child(4) {
    .store-item {
      :hover {
        transform: rotate(5deg);
        transition: all 0.5s ease-out;

        img {
          transform: rotate(-15deg);
          transition: all 0.5s ease-out;
        }
      }
    }
  }
`;

const StoreSectionLayout = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 1;
  width: 100%;
  height: 100%;
  filter: blur(1px);
`;
