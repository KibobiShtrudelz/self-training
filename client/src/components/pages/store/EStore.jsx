import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";

import StoreSection from "./StoreSection";
import SectionsContainer from "./sections/SectionsContainer";

const EStore = () => {
  const [eStoreSections, setEStoreSections] = useState([]);

  const { sections } = eStoreSections;

  const { path, url } = useRouteMatch();

  const getSections = async () => {
    const response = await fetch("http://localhost:5000/e-store");
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body;
  };

  useEffect(() => {
      getSections().then(data => setEStoreSections(data));
  }, []);

  const items = sections?.map((section, idx) => (
    <StyledLink
      key={idx}
      to={`${url}/section-${idx + 1}`}
      className="store-section-wrapper"
    >
      <StoreSection
        className="store-item"
        title={`Section ${idx + 1}`}
        imgUrl="https://source.unsplash.com/random"
        id={idx + 1}
      />

      <StoreSectionLayout className="store-section-layout" />
    </StyledLink>
  ));

  return (
    <Wrapper className="e-store-wrapper">
      {items}

      <Switch>
        <Route path={`${path}/:sectionId`}>
          <SectionsContainer />
        </Route>
      </Switch>
    </Wrapper>
  );
};

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

const StyledLink = styled(Link)`
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
      height: 120%;
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
          box-shadow: -5px 5px 5px 0px rgba(17, 17, 17, 0.5);

          :hover {
            box-shadow: 5px 5px 5px 0px rgba(17, 17, 17, 1);
            transition: all 0.5s ease-out;
          }
        }
      }

      .shrink {
        box-shadow: -5px 5px 5px 0px rgba(17, 17, 17, 0.5);
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
