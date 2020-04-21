import React from "react";
import styled from "styled-components";

import StoreItem from "./StoreItem";

function EStore() {
  let items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <StoreSectionWrapper key={i} className="store-selection-wrapper">
        <StoreItem
          className="store-item"
          title="TITLE"
          // imgUrl={`https://picsum.photos/300/450?random=${i}`}
          imgUrl="https://source.unsplash.com/random"
        />

        <StoreSectionLayout className="store-selection-layout" />
      </StoreSectionWrapper>
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

const StoreSectionWrapper = styled.div`
  width: 20%;
  height: 500px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0);

  .store-item {
    width: 100%;
    height: 450px;
    border-radius: 5px;
    position: relative;
    z-index: 3;
    background-color: #202020;
    transform: rotate(0deg);

    :hover {
      transform: rotate(-5deg);
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.5s ease-out;

      .shrink {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(10deg);
        transition: all 0.5s ease-out;
        box-shadow: -5px 5px 5px 0px #171717;
      }
    }

    :not(:hover) {
      transform: rotate(0deg);
      background-color: #303030;
      transition: all 0.5s ease-in;

      .shrink {
        transform: rotate(0deg);
        transition: all 0.5s ease-in;
      }
    }

    .shrink {
      width: 110%;
      height: 110%;
      border: 1px solid #202020;
      border-right: 3px solid #202020;
      border-bottom: 3px solid #202020;
      border-radius: 5px;
      box-shadow: 5px 5px 5px 0px rgba(17, 17, 17, 0.5);
      display: flex;

      :hover {
        width: 100%;
        height: 100%;
        box-shadow: -5px 5px 5px 0px rgba(17, 17, 17, 1);
        transition: all 0.5s ease-out;
      }
    }
  }

  :nth-child(3),
  :nth-child(4) {
    .store-item {
      :hover {
        transform: rotate(5deg);
        transition: all 0.5s ease-out;

        .shrink {
          transform: rotate(-10deg);
          transition: all 0.5s ease-out;
          box-shadow: 5px 5px 5px 0px rgba(17, 17, 17, 0.5);

          :hover {
            box-shadow: -5px 5px 5px 0px rgba(17, 17, 17, 1);
            transition: all 0.5s ease-out;
          }
        }
      }
    }
  }

  :hover {
    border-color: rgba(255, 255, 255, 0.1);
    transition: all 0.5s linear;
  }

  :not(:hover) {
    border-color: #0000000;
    transition: all 0.5s linear;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
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
